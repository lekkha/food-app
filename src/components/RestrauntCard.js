import { CDN_URL } from '../utils/constants';

const RestrauntCard = (props) => {
  const { resList } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resList?.info;
  return (
    <div className="res-card m-4 p-0 w-[200px] bg-sky-50 flex flex-col h-[310px] hover:scale-95">
      <img
        className="rounded-xl h-36 object-cover"
        alt="res-logo"
        // since we are concatination -> could be done in js only thus {}
        src={CDN_URL
          + cloudinaryImageId}
      />

      <div className="my-4 overflow-auto px-4">
        <h3 className="font-bold pt-2" >{name}</h3>
        <div className="flex text-sm gap-3 mt-2 mb-1">
          <h4 className="text-sm">{avgRating} stars</h4>
          <h4 className="text-sm">{sla?.deliveryTime ?? '20'} minutes</h4>
        </div>
        {/* JavaScript prop-> for since cusine is passed as an array for comma seperator between elems use .join(", ") */}

        <h4 className="text-xs pb-4">{cuisines.join(", ")}</h4>
        {/* <h4 className="text-sm">{avgRating} stars</h4> */}
        <h4 className="text-sm">{costForTwo}</h4>
        {/* <h4 className="text-sm">{sla?.deliveryTime ?? '20'} minutes</h4> */}

      </div>
    </div>
  );
};

export default RestrauntCard; 