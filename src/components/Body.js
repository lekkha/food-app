import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

import { useState, useEffect } from "react";

const Body = () => {

  const[listOfRes, setListOfRes] = useState([]);

  useEffect(() => {
    fetchData(); 
  }, []); 

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json =  await data.json();
    console.log("apiData",json); 
    setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }; 
  // console.log("resList", resList); 

  //conditional rendering 
  // if(listOfRes.length === 0){
  //   return <Shimmer />
  // }

    return (listOfRes.length ===0) ? <Shimmer /> : (
      <div className="body">
        <div className="filter">
          <button 
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter((res) => res.info.avgRating>4.0);
            setListOfRes(filteredList);
          }}
          >Top Rated Restraunts</button>
        </div>
        <div className="res-contianer">
          {/* since resList is an arrya  */}
  
          {listOfRes.map((restraunt) => (
            <RestrauntCard key={restraunt.info.id} resList={restraunt}/>
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