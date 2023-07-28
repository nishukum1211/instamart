import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useState, useContext } from "react";
import ShimmerUI from "./ShimmerUI";
import {Link} from "react-router-dom";
import useOffline from "../utils/useOffline";
import UserContext from "../utils/UserContext";







const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");//searchText is a local variabls.it will have the updated value.
  const {user,setUser} = useContext(UserContext);
  //empty dependency array=>once after render
  //dep array[searchText] =>once after initial render +everytime after render(my searchText changes)
  useEffect(() => {
    //API call
    getRestaurants();
  },[]);
  async function getRestaurants () {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

  }
  // const isOnline = useOnline(true);
  // if(!isOnline) {
  //   return <h1>offline ,please check your internet connection!!</h1>

  // }
  //conditional rendering
  //if restaurants is empty => simmer ui
  //if restaurant is data => actual data ui
  if(!allRestaurants) return null;


  
  

  return allRestaurants.length === 0 ? (
    <ShimmerUI /> 
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-50 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          
          className="p-2 m-2 bg-purple-800 hover:bg-gray-500 text-white rounded-md"
          onClick={(e) => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input value = {user.name} onChange = {
          e => setUser({
            ...user,
            name : e.target.value,
          
          })
        }></input>
        <input value = {user.email} onChange = {
          e => setUser({
            ...user,
            email : e.target.value,
          
          })
        }></input>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.data.id}><RestaurantCard {...restaurant.data} user={user} /></Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
 