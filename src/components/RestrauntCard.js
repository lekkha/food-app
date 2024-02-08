import {CDN_URL} from '../utils/constants';

const RestrauntCard = (props) => {
    const { resList } = props;
  
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resList?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          // since we are concatination -> could be done in js only thus {}
          src={CDN_URL
            + cloudinaryImageId}
        />
        <h3>{name}</h3>
        {/* JavaScript prop-> for since cusine is passed as an array for comma seperator between elems use .join(", ") */}
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime ?? '20'} minutes</h4>
      </div>
    );
  };

  export default RestrauntCard; 