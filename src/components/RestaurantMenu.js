import React from 'react'
import Shimmer from './Shimmer';
import MenuCategory from './MenuCategory';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    const {resId} = useParams();

    // const [menuData, setMenuData] = useState([]);
    const resInfo = useRestaurantMenu(resId);
    
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