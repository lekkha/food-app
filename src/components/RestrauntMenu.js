// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
// import { generateProxyUrl } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestrauntCategory from "./RestaurantCategory";


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
    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const menu = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(x => x.card.card.title === "Recommended")
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories);


    return (
        <div className="Menu text-center">
            <h2 className="font-bold my-2 text-2xl">{name}</h2>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>

            {/* categories accordian  */}
            {categories.map((category) => (<RestrauntCategory key={category?.card?.card?.title} data={category?.card?.card} />))}


            {/* <ul>
                {menu?.card.card.itemCards?.map((menuItem) => (
                    <li key={menuItem?.card?.info?.id}>{menuItem?.card?.info.name}</li>
                ))}
            </ul>*/}
        </div>
    );
};

export default RestrauntMenu;