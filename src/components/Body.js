import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

  const[listOfRes, setListOfRes] = useState(resList);

  useEffect(() => {
    fetchData(); 
  }, []); 

  const fetchData = async () => {
    const data = await fetch('https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING');
    const json =  await data.json();
    console.log("apiData",json); 
    setListOfRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }; 
  console.log("resList", resList); 

    return (
      <div className="body">
        <div className="filter">
          <button 
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter((res) => res.data.avgRating>4.0);
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