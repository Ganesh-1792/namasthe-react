import { restaurantData } from "../utils/mockData";
import RestoCard from "./RestoCard";
import { useState } from "react";

// let restaurant = restaurantData;


const Body = () => {
    const [restaurant, setRestaurant] = useState(restaurantData);

    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    const filteredList = restaurant.filter((item) => {
                        return item.info.avgRating > 4
                    })
                    setRestaurant(filteredList);
                }}>
                Top Rated Restaurants
                </button>
            </div>
            <div className='card-container'>
            {
                restaurant.map((item) => {
                    return <RestoCard key={item.info.id} resData = {item} />
                })
            }
            </div>
        </div>
    )
}

export default Body;