import { FOOD_URL } from "../utils/constants"
const FoodCard = (props)=> {
    const {resData} = props
    const {cloudinaryImageId, name, cuisines, locality, costForTwo, avgRating} = resData.info

    return (
        <div id='foodcard'>
            <div id='foodImage'>
                <img id='fim' src={FOOD_URL+cloudinaryImageId}></img>

            </div>
            <div id='foodDetail'>
                <h2 id='restraunt' className="decor">{name}</h2>
                <h3 id='cusines' className="decor">{cuisines.join(", ")}</h3>
                <h3 id='location' className="decor">{locality}</h3>
                <h3 id='rating' className="decor">{avgRating + " ★"}</h3>
                <h3 id='cost' className="decor">{costForTwo}</h3>
               
            </div>
        </div>
    )
}


export default FoodCard