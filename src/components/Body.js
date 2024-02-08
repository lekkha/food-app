import RestrauntCard from "./RestrauntCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-contianer">
          {/* since resList is an arrya  */}
  
          {resList.map((restraunt) => (
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