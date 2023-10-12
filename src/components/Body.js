import { Link } from "react-router-dom"
import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState(" ")
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

useEffect(()=>{
  fetchData();
}, []);

const fetchData = async () =>{
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();

  setRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //optional chainig
  setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

  if(restaurantList.length === 0){
    return <Shimmer />
  }

  return (
    <div>
    <div id="filter-search">
    <div className="search">
      <input
       type="text"
        className="search-box"
        value={searchText}
        onKeyDown={(e)=>{
          console.log(e)
          if(e.key === "Enter"){
            let filteredRestaurant = restaurantList.filter((res)=>(res.info.name.toLowerCase().includes(searchText.toLowerCase())))
             setFilteredRestaurant(filteredRestaurant);
            
          }
        }}
        onChange={(e)=>{
          setSearchText(e.target.value)
          
          
        }}
          ></input>
          <button
            id="search-btn"
            onClick={()=>{
              

             let filteredRestaurant = restaurantList.filter((res)=>(res.info.name.toLowerCase().includes(searchText.toLowerCase())))
             setFilteredRestaurant(filteredRestaurant);
            }}
          ><FontAwesomeIcon icon={faMagnifyingGlass} id="icon" /></button>
    </div>
    <div id="filter">
        <button id="filter-btn" onClick={()=>{
         let filteredRest =  restaurantList.filter((restaurant)=> restaurant.info.avgRating >= 4)
         setRestaurantList(filteredRest)
         console.log(setRestaurantList)
        }} >Top Rated Restaurants</button>
    </div>
    </div>
      <div id="body">
        {filteredRestaurant.map((restaurant) => (
       <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}> <FoodCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
