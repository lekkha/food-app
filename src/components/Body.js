import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const[listOfRes, setListOfRes] = useState(resList);

  // let listOfRes = [
  //   {
  //   data: {
  //     id: "74453",
  //     name: "Domino's Pizza",
  //     cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //     cuisines: ["Pizzas"],
  //     tags: [],
  //     costForTwo: 40000,
  //     deliveryTime: 45,
  //     avgRating : 4.0,

  //   },
  // },
  // {
  //   data: {
  //     id: "74454",
  //     name: "Domino's",
  //     cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //     cuisines: ["Pizzas"],
  //     tags: [],
  //     costForTwo: 40000,
  //     deliveryTime: 45,
  //     avgRating : 3.0,
      

  //   },
  // },
  // {
  //   data: {
  //     id: "74455",
  //     name: "Domi",
  //     cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //     cuisines: ["Pizzas"],
  //     tags: [],
  //     costForTwo: 40000,
  //     deliveryTime: 45,
  //     avgRating : 4.5,

  //   },
  // },
  // ]; 


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
            <RestrauntCard key={restraunt.data.id} resData={restraunt}/>
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