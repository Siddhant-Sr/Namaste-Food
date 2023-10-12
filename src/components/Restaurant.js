import React, { useState } from 'react';
import { useEffect } from 'react';
import { Shimmer } from './Shimmer';
import { useParams } from 'react-router-dom';

const Restaurant = ()=> {
    const [resDetail, setResDetail] = useState(null);
    useEffect(()=>{
        fetchData();
        
    }, []);
    let {resId}=useParams()
    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4594965&lng=77.0266383&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
    
       setResDetail(json.data);
       
    }

    if(resDetail === null) return <Shimmer />
    
    const {name, avgRating, cuisines, locality, costForTwoMessage, totalRatingsString, sla
    } = resDetail?.cards[0]?.card?.card?.info;
    console.log(resDetail)

        const {itemCards}=resDetail?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
        console.log(itemCards)
  return (
    <div>
        <div className='restroDetails'>
        <div id='first'>
            <h2 id='restroName'> {name} </h2>
            <p>{cuisines.join(", ")}</p>
            <p>{locality}</p>

            <p>{avgRating}</p>
            <p>{totalRatingsString}</p>
         
            </div>
            <div id='second'>
Offers will go here
<p>{costForTwoMessage}</p>
            <p>{sla.slaString}</p>
            </div>
            <div id='third'>
Dishes will go here

            </div>
        </div>
    </div>
  )
}

export default Restaurant