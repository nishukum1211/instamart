import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { IMG_CDN_URL } from "../contants";
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";


const MenuItems = (props) => {
  const { id, image } = props;
  // console.log(id);
  const [menuItem, setMenuItem] = useState({});
  const dispatch = useDispatch();
	const addFoodItem = (item) => {
		dispatch(addItem(item));
	}

  useEffect(() => {
    getMenuItems();
  }, []);

  async function getMenuItems() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/quick?menuId=${id}&categories=true`, {mode:'cors'}
    );
    const jsonData = await data.json();
    setMenuItem(jsonData?.data?.menu?.items); 
  }
 

  return !menuItem ? (
    <ShimmerUI />
  ) : (<>
    <div className=" flex justify-center m-2 p-2">
      <div className="">
        {Object.values(menuItem).map((item) => (
          <div
            
            key={item.id}
          >
            <span >
              <div >
                {item?.name}
              </div>
            
              <div >
                <span >
                  Price per plate :₹{item.price / 100}
                </span>
                <div className="flex">
	<button className="flex p-2 m-2 bg-green-400" onClick={() => addFoodItem(item)}>Add Items</button>
  </div>
                
              </div>
            </span>
            {/* <img
              className=" h-24 w-32 rounded-md" alt=""
              src={
                IMG_CDN_URL +
                (!item.cloudinaryImageId ? image : item.cloudinaryImageId)
              }
            /> */}
          </div>
        ))}
      </div>

    </div>
    <div className="p-2 m-2">
        <button ></button>
    </div>
    </>
  );
};

export default MenuItems;