import RestrauntCard from "./RestrauntCard";
// import resList from "../utils/mockData";

const Body = () => {

  const listOfRes = [
    {
    data: {
      id: "74453",
      name: "Domino's Pizza",
      cloudinaryImageId: "bz9zkh2aqywjhpankb07",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 40000,
      deliveryTime: 45,

    },
  },
  {
    data: {
      id: "74454",
      name: "Domino's",
      cloudinaryImageId: "bz9zkh2aqywjhpankb07",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 40000,
      deliveryTime: 45,

    },
  },
  {
    data: {
      id: "74455",
      name: "Domi",
      cloudinaryImageId: "bz9zkh2aqywjhpankb07",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 40000,
      deliveryTime: 45,

    },
  },
  ]; 


    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn">Top Rated Restraunts</button>
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