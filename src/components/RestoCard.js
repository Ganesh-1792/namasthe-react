import { CDN_LOG } from "../utils/constants"

const RestoCard = (prop) => {
    const {resData} = prop
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = resData.info
    return (
        <div className='restocard'>
            <img className='resto-logo' src={CDN_LOG+cloudinaryImageId} alt="rest-logo" />
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Starts</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestoCard