import React from 'react';

const Cart = ({ cart , removeCart , handleQtyUpdate}) => {
    return (
        <div>
            {cart.length > 0 && (
                 <div className='container' >
                    <h3 style={{textAlign:'center'}}>Cart</h3>
                    <div className='d-flex flex-wrap gap-2 justify-content-center gap-0 pt-3'>
                        {cart.map((item, index) => (
                             <div key={index}>
                                <table>
                                    <tr><th>{item.title}</th></tr>
                                    <tr><img src={item.images[0]} alt="Not found" style={{ width: "18rem", aspectRatio: "1/1" }} className="object-fit-contain"/></tr>
                                    </table>
                                    <button className=' btn btn-danger rounded' style={{width:'100%'}} onClick={()=> removeCart(item)}>Remove from Cart</button>
                                     <div className=' d-flex justify-content-between' style={{marginTop:"20px"}}>
                                        <button className=' btn btn-dark' onClick={() => handleQtyUpdate(item,"-")}>-</button>
                                        <div>{item.qty}</div>
                                        <button className=' btn btn-dark' onClick={() => handleQtyUpdate(item,"+")}>+</button>
                                        </div>
                                        </div> 
                                    )
                                    )
                                    }
                                    </div>
                                    </div>
                                )}
                                </div>
                                );
                            }

export default Cart;