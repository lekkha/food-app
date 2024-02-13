import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { generateProxyUrl } from "../utils/constants";
import { RESTAURANTS_API } from "../utils/constants";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Body = () => {

  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRest, setFilteredRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resource = generateProxyUrl(RESTAURANTS_API)
    const data = await fetch(resource);
    // const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();
    console.log("apiData", json);
    setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  // console.log("resList", resList); 

  //conditional rendering 
  // if(listOfRes.length === 0){
  //   return <Shimmer />
  // }

  return (listOfRes.length === 0) ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => { setSearchText(e.target.value) }}
          ></input>
          <button
            //filter logic 
            onClick={() => {
              const filteredRest = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRest(filteredRest);
            }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter((res) => res.info.avgRating > 4.0);
            setListOfRes(filteredList);
          }}
        >Top Rated Restraunts</button>
      </div>
      <div className="res-contianer">
        {/* since resList is an arrya  */}

        {filteredRest.map((restraunt) => (
          <Link key={restraunt.info.id} to={"/restaurant/" + restraunt.info.id}>
            <RestrauntCard resList={restraunt} />
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