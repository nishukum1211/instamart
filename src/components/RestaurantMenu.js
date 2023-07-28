// import { useEffect,useState } from "react";
// import {useParams} from "react-router-dom";
// import { IMG_CDN_URL } from "../contants";
// import ShimmerUI from "./ShimmerUI";
// import MenuItems from "./Menuitems";

// const RestaurantMenu = () => {
//     const {resid} = useParams();

//     const [restaurant, setRestaurant] = useState({});
//     //const restaurant = useRestaurant(resid);
//     useEffect(() => {
//         getRestaurantInfo();

//     },[]);
//     async function getRestaurantInfo() {
//         const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940499&lng=85.1376051&restaurantId=229");
//         const json = await data.json();
//         console.log(json);
//         setRestaurant(json.data?.cards[0]?.card?.card?.info);
        
//     };
//     return (
      
            
// 		<div className=" flex flex-col font-serif m-5 p-4 px-52">
// 			<div className=" flex justify-evenly ">
// 				<span className=" text-md font-semibold">
// 					<div className=" text-orange-500 text-3xl pe-10">{restaurant?.name}</div>
// 					<div >Location : {restaurant?.areaName + ' ' + restaurant?.city}</div>
// 					<div>{restaurant?.availability?.nextOpenTimeMessage}</div>
// 				</span>
// 				<span>
// 					<div className=" fa fa-star-half-empty ">{restaurant.avgRating}</div>
// 				</span>
// 				<img className=" h-52 w-80 " src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
// 			</div>
// 			<div>{restaurant.availabilityServiceabilityMessage}</div>
// 			<div>
// 				<MenuItems id={resid} image={restaurant.cloudinaryImageId}/>
// 			</div>
// 		</div>
// 	);


    
            
    

            
    

    
    
    
    

    

    

                
            
    
// };
// export default RestaurantMenu;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL} from "../contants";
import ShimmerUI from "./ShimmerUI";
import MenuItems from "./MenuItems";


const RestaurantMenu = () => {
	const { id } = useParams();
	const [restaurant, setRestaurant] = useState({});
	// const [itemData, setItemData] = useState();
	

	useEffect(() => {
		getRestaurantDetails();
	}, []);

	async function getRestaurantDetails() {
		const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940499&lng=85.1376051&restaurantId=${id}&submitAction=ENTER`, {mode:'cors'});
		const jsonData = await data.json();
		setRestaurant(jsonData?.data?.cards[0]?.card?.card.info);
	}

	

return restaurant.length === 0 ? (
  <ShimmerUI />
) 
 : (<>
 <div className="w-72 h-56">
 <img className=" h-52 w-80 rounded-lg shadow-sm " src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
 <span className=" text-md font-semibold">
					<div className=" text-orange-500 text-3xl pe-10">{restaurant?.name}</div>
					<div >Location : {restaurant?.areaName + ' ' + restaurant?.city}</div>
					<div>{restaurant?.availability?.nextOpenTimeMessage}</div>
	</span>
  <span>
					<div className=" fa fa-star-half-empty ">{restaurant.avgRating}</div>
	</span>
  <div>{restaurant.availabilityServiceabilityMessage}</div>



 </div>
 <MenuItems  id={id} image={restaurant.cloudinaryImageId}/>

 

 
 </>)
 };
export default RestaurantMenu;