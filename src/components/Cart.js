import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearItem());
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">

                <botton
                    className="p-1 m-2 bg-green-500 text-white rounded-lg cursor-pointer"
                    onClick={handleClearCart}>
                    Clear Cart</botton>
                {cartItems.length === 0 && <h1>Cart is Empty.Shop to add items!</h1>}
                <ItemList items={cartItems} />
            </div>

        </div>
    );
};

export default Cart; 