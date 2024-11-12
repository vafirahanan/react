
import React, { Fragment, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { CgShoppingCart } from 'react-icons/cg';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Hero = ({ cart, setCart }) => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchItem, setSearchItem] = useState("");
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const limit = 50;
                const skip = (currentPage - 1) * limit;
                const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
                const result = await response.json();
                const filteredData = result.products.filter((product) =>
                    product.title.toLowerCase().includes(searchItem.toLowerCase())
                );
                setProducts(filteredData);
                const pages = Math.ceil(filteredData.length / limit);
                setTotalPages(pages);
            } catch (error) {
                console.log(error.message);
                toast.error("An error happened");
            }
        };
        getProducts();
    }, [currentPage, searchItem]);

    const addCart = (product) => {
        const exists = cart.find((item) => item.id === product.id);
        if (exists) {
            toast.error("Product already exists in the cart.");
        } else {
            setCart([...cart, { ...product, qty: 1 }]);
            toast.success("Added to cart!");
        }
    };

    const removeCart = (product) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
        toast.success("Removed from cart.");
    };

    const handleQtyUpdate = (product, op) => {
        const updatedCart = cart.map((item) => {
            if (item.id === product.id) {
                const newQty = op === "+" ? item.qty + 1 : item.qty - 1;
                return { ...item, qty: newQty > 0 ? newQty : 1 };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const next = () => {
        navigate("/Cart");
    };


    return (
        <Fragment>
            <div className='pt-2' style={{fontWeight:'bold'}}>SHOP
                <div className='d-flex justify-content-center'>
                    <div className='position-relative w-50 d-flex'>
                        <input
                            type="text"
                            placeholder="Search Product..."
                            onChange={(event) => setSearchItem(event.target.value)}
                            value={searchItem}
                            className='p-2 w-100 border-0'
                            style={{ outline: 0 }}/>
                        <FaSearch style={{ height: '40px', cursor: 'pointer' }} />
                    </div>
                    <div
                        style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
                        onClick={next}
                    >
                        <FaShoppingCart style={{ color: 'green', height: '40px' }} />
                        <span
                            className='badge bg-gradient rounded-circle'
                            style={{
                                position: 'absolute',
                                top: '-6px',
                                right: '-15px',
                                fontSize: '0.8rem',
                                padding: '5px 10px',
                                color:'black'
                            }}>
                            {cart.length}
                        </span>
                    </div>
                </div>
            </div>

            <div className='d-flex flex-wrap gap-2 justify-content-center pt-3'>
                {products.map((item) => (
                    <div key={item.id} style={{ width: "15rem" }} className='p-2 bg-light card-hover'>
                        <div>
                            <img
                                src={item.images[0]}
                                alt={item.title}
                                style={{ width: "15rem", aspectRatio: "1/1", objectFit: "contain" }}
                            />
                        </div>
                        <div className='text-center'>
                            <h5 className='text-truncate'>
                                <Link to={`/single-view/${item.id}`}>{item.title}</Link>
                            </h5>
                            <div className='d-flex justify-content-between'>
                                <div>{item.rating}</div>
                                <div>${item.price}</div>
                            </div>
                            <button
                                className='w-100 mt-2 bg-success text-light p-1 border-0'
                                onClick={() => addCart(item)}
                            >
                                <CgShoppingCart /> Add To Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
        </Fragment>
    );
};

export default Hero;
