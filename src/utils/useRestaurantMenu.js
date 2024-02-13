import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import { generateProxyUrl } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const resource = generateProxyUrl(MENU_API + resId)
        const data = await fetch(resource);
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo;
}

export default useRestaurantMenu; 