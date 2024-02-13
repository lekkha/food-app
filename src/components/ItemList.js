import { CDN_URL } from "../utils/constants";
const itemList = ({ items }) => {
    console.log(items);
    return (
        <div>
            {items.map((item) =>
                <div key={item.card.info.id} className="m-2 p-2 border-b-2 border-gray-300 text-left flex items-center gap-2">

                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12">
                        <div className="absolute">
                            <button className="my-14 mx-20 bg-green-500 shadow-lg rounded-lg text-white">Add +</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} alt="pic" />
                    </div>

                </div>
            )}
        </div>

    );

}

export default itemList;