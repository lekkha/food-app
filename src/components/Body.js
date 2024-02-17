import RestrauntCard, { withPromotedLable } from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { generateProxyUrl } from "../utils/constants";
import { RESTAURANTS_API } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([]);

  const RestrauntCardPromoted = withPromotedLable(RestrauntCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resource = generateProxyUrl(RESTAURANTS_API)
    const data = await fetch(resource);
    // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    // console.log("apiData", json);
    setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  // console.log("resList", listOfRes);


  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline please check your internet connection
      </h1>
    );

  return (listOfRes.length === 0) ? <Shimmer /> : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => { setSearchText(e.target.value) }}
          ></input>
          <button
            className="px-4 py-0.5 bg-green-500 m-4 rounded-lg"
            //filter logic 
            onClick={() => {
              const filteredRest = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRest(filteredRest);
            }}
          >Search</button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-1  bg-yellow-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRes.filter((res) => res?.info?.avgRating > 4.5);
              console.log(filteredList)
              setFilteredRest(filteredList);
            }}
          >Top Rated Restaurants</button>
        </div>

      </div>
      <div className="res-contianer flex flex-wrap mx-20">
        {/* since resList is an arrya  */}

        {filteredRest.map((restraunt) => (
          <Link key={restraunt.info.id} to={"/restaurant/" + restraunt.info.id}>

            {restraunt.info.veg ? <RestrauntCardPromoted resList={restraunt} /> : <RestrauntCard resList={restraunt} />}

          </Link>

        ))}


        {/* <RestrauntCard resData={resList[0]} />
          <RestrauntCard resData={resList[1]} />
          <RestrauntCard resData={resList[2]} />
          <RestrauntCard resData={resList[3]} />
          <RestrauntCard resData={resList[4]} />
          <RestrauntCard resData={resList[5]} /> */}
      </div>
    </div>
  );
};

export default Body; 