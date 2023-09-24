import FoodCard from "./FoodCard";
import { REST } from "../utils/mockData";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
useEffect(()=>{
  fetchData();
}, []);

const fetchData = async () =>{
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();

  setRestaurantList(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
  
}

  if(restaurantList.length === 0){
    return <Shimmer />
  }

  return (
    <div>

    <div id="filter">
        <button id="filter-btn" onClick={()=>{
         let filteredRest =  restaurantList.filter((restaurant)=> restaurant.info.avgRating >= 4)
         setRestaurantList(filteredRest)
         console.log(setRestaurantList)
        }} >Top Rated Restaurants</button>
    </div>
      <div id="body">
        {restaurantList.map((restaurant) => (
          <FoodCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
