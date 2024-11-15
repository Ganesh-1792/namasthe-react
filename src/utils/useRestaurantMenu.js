import { useEffect, useState } from "react";
import { RES_MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState([]);

    useEffect(()=> {
        fetchMenuData();
    }, [])

    const fetchMenuData = async () => {
        const data = await fetch(RES_MENU_URL+resId);
        
        let json = await data.json();
        setResInfo(json);

    }

    return resInfo;
}

export default useRestaurantMenu;