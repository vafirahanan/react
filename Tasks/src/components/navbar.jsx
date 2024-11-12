import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { useCart } from './hooks';
// import { CartContext } from '../App';

const Navbar = () => {

    // const { cartList } = useContext(CartContext)
    const {cartList} = useCart()

    return (
        <div className="d-flex justify-content-between border-bottom align-items-center px-3" style={{height: "60px"}}>
            <div><h1>SHOPIFY</h1></div>
            <div>
                <FaHeart size={20} className="me-4 text-danger" />
                <div className="position-relative">
                <FaShoppingCart size={20} />
                <div className='position-absolute' style={{top: "-10px", right: "-7px"}}>{ cartList.length }</div>
                </div>
                </div> 
            </div>
       
    );
}

export default Navbar;
