import React from 'react'
import { FOOD_CATALOG } from '../utils/constants'

const MenuItem = (prop) => {
    const {resData} = prop
    
  return (
    <div className='food-item'>
        <div className='item-details'>
            <h2 className='item-title'>{resData.name}</h2>
            <p className='item-price'>₹{resData.price/100 || resData.defaultPrice/100}</p>
            <p className='item-rating'>
                <span className='rating-value'>{resData.ratings.aggregatedRating.rating}</span>
                <span className='rating-count'>{resData?.ratings?.aggregatedRating?.rating ? '('+resData.ratings.aggregatedRating.ratingCountV2+')' : ''}</span>
            </p>
            <p className='item-description'>{resData.description}</p>
        </div>
        <div className='item-image'>
            
            <img src={resData?.imageId ? FOOD_CATALOG+resData?.imageId : ''} alt="item-image" />
            <button className='add-button'>ADD</button>
        </div>
        
    </div>
  )
}

export default MenuItem