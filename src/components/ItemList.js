import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    // console.log(items);

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) =>
                <div data-testid="foodItems" key={item.card.info.id} className="m-2 p-2 border-b-2 border-gray-300 text-left flex items-center gap-2">

                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    <div className="w-3/12">
                        <div className="absolute">
                            <button
                                className="mx-10 bg-green-500 shadow-lg rounded-lg text-white"
                                onClick={() => handleAddItem(item)}
                            >Add +</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} alt="pic" />
                    </div>

                </div>
            )}
        </div>

    );

}

export default ItemList;