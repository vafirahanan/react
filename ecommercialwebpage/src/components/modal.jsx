import {useEffect , useState} from 'react';
import {useParams} from 'react-router-dom'
// import { CgShoppingCart } from 'react-icons/cg';
// import toast from 'react-hot-toast';


const Modal = () => {
    const { id } = useParams()
    const [product , setProduct ] = useState(null)
    const [currentImage , setCurrentImage] = useState("")


    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch (`https://dummyjson.com/products/${id}`)
                const result = await response.json()
                setCurrentImage(result.images[0])
                setProduct(result)
            }
            getProduct()
        },[id])
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-1 flex flex-column'>
                        {
                            product?.images.map(image => {
                                return <img key={product.id} src = {image} onMouseEnter={() => setCurrentImage(image)} alt='image' width={100} height={100}/>
                            })
                        }
                    </div>
                    <div className="col-5">
                        <img src={currentImage} alt="" width={500} height={500}/>
                    </div>
                    <div className="col-6" style={{color:"darkblue", fontWeight:'bolder'}}>
                        {product?.title}
                    </div>
                    <div className='col-6'>
                        {product?.description}
                        <div>
                        category:{product?.category}
                        brand:{product?.brand}
                        warranty Infirmation:{product?.warrantyInformation}
                        shipping Information:{product?.shippingInformation}
                        availability checking:{product?.availabilityStatus}
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className='w-100 mt-2 bg-success text-light p-1 border-0' onClick={() => addCart(item)}><CgShoppingCart /> Add To Cart</button> */}
        </div>
    )
}

export default Modal;
