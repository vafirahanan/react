import React, { Fragment, useState, useContext } from 'react'
import Navbar from '../components/navbar'
import { products } from '../constants/products'
import ProductList from '../components/productList'
import Modal from '../components/modal'
// import {CartContext} from '../App'
import { useCart } from '../components/hooks'

const Shoppage = () => {
    const [selectedProduct , setSelectedProduct] =useState(null)
    // const {cartList} = useContext(CartContext)
    const {cartList} = useCart()
    return (
        <Fragment>
            <Navbar />
        <div className="d-flex flex-wrap gap-3">
            {
                products.map((product) => {
                    return <ProductList
                    product={product}
                    key={product.id}
                    setSelectedProduct={setSelectedProduct}
                    />
                })
            }
        </div>
        {
            selectedProduct && <Modal
             selectedProduct={selectedProduct} 
             setSelectedProduct = {setSelectedProduct} />
        }
        <div className='mt-5'>
                <h1>CART</h1>
                <div className="d-flex mt-3 flex-wrap gap-3">
                    {
                        cartList.map((product) => {
                            return <ProductList
                                product={product}
                                key={product.id}
                                cart={true}
                            />
                        })
                    }
                </div>
            </div>
        </Fragment>
    )
}
export default Shoppage
