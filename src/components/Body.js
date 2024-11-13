import RestoCard from "./RestoCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// let restaurant = restaurantData;


const Body = () => {
    const [restaurant, setRestaurant] = useState([]);
    const [tempRestaurant, setTempRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        console.log("------entered use effect-------");
        fetchData();
        
      },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.044171355713376&lng=80.24187264854683&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();
        console.log("----json----",json);
        setRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setTempRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(restaurant.length === 0 || tempRestaurant.length === 0){
        return <Shimmer/>
    }
    
    return (
        <div className='body'>
            <div className='filter'>
                <div className="search-container">
                    <input type="text" className="search-input" value = {searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="search-btn" onClick={() => {
                        const filteredData= restaurant.filter((item) => {
                            return item.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })

                        setTempRestaurant(filteredData);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = restaurant.filter((item) => {
                        return item.info.avgRating > 4.5
                    })
                    setRestaurant(filteredList);
                }}>
                Top Rated Restaurants
                </button>
            </div>
            <div className='card-container'>
            {
                tempRestaurant.map((item) => {
                    return <RestoCard key={item.info.id} resData = {item} />
                })
            }
            </div>
        </div>
    )
}

export default Body;