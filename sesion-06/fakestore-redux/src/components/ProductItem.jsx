import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { useSelector } from "react-redux";

const ProductItem = ({product}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const isProductInCart = cart.some((item) => item.id === product.id);

    const handleCartAction = () => {
        if (isProductInCart) {
          dispatch(removeFromCart(product.id));
          alert("Producto eliminado del carrito");
        } else {
          dispatch(addToCart(product));
          alert("Producto añadido al carrito");
        }
      };

    return (<li className="flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow">
        <img src={product.image} className="w-20" />
        <span className="text-center font-bold">{product.title}</span>
        <span className="text-center font-bold text-sm">${product.price}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCartAction}
            >
            {isProductInCart ? "Eliminar del carrito" : "Añadir al carrito"} </button>
      </li>)
}

export default ProductItem;