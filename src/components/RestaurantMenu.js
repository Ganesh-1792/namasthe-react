import React from 'react'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import MenuItem from './MenuItem';
import MenuCategory from './MenuCategory';
import { RES_MENU_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

    const {resId} = useParams();

    // const [menuData, setMenuData] = useState([]);
    const [resInfo, setResInfo] = useState([]);

    useEffect(()=> {
        fetchMenuData();
    }, [])

    const fetchMenuData = async () => {
        const data = await fetch(RES_MENU_URL+resId);
        
        let json = await data.json();
        setResInfo(json);

    }
    if(resInfo.length === 0) return <Shimmer/>

    const {name, costForTwoMessage, cuisines, locality, avgRating}  = resInfo?.data?.cards[2]?.card?.card?.info
    const menuLists  = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

  return (
    <div className='menu-category'>
        <h1 className='restaurant-name'>{name}</h1>
        <p className='locality'>{locality} </p>
        <p className='cuisines'>{cuisines.join(", ")}</p>
        <p className='rating'><span className='cost-for-two'>{costForTwoMessage}</span> Rating : {avgRating}</p>
        <h1 className='menu-heading'>Menu</h1>
        {
            menuLists?.map((menuList, index) => {
                if(index > 1 && menuList?.card?.card?.itemCards?.length > 0) {
                    return (
                        <MenuCategory key={menuList?.card?.card?.title} menuList={menuList} />
                    )
                }
            })
        }
    </div>
  )
}

export default RestaurantMenu