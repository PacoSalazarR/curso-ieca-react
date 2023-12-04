import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector(state => state.cart)
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    setTotal(cart.length);
  }, [cart])

  return (
    <nav className="bg-black p-4 w-full flex justify-center">
      <div className="container flex justify-between items-center text-white px-4">
        <Link to="/"><h1 className="text-xl">FakeStore</h1></Link>
        <div style={{ display: 'flex' }}>
          <Link to="/cart" style={{ marginRight: '10px' }}>Carrito</Link>
          <h3 style={{ marginRight: '10px' }}>{total}</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
