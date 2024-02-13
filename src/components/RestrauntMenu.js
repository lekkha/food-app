// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
// import { generateProxyUrl } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestrauntMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    // const [resInfo, setResInfo] = useState(null);
    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const resource = generateProxyUrl(MENU_API + resId)
    //     const data = await fetch(resource);
    //     // const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // }

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;


    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)

    return (
        <div className="Menu">
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwoMessage}</h4>
            <ul>
                {itemCards?.map(item =>
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {"Rs."}{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                    </li>)}
                {/* <li>{itemCards[0].card.info.name}</li> */}
            </ul>
        </div>
    );
};

export default RestrauntMenu; 