

import { useContext } from 'react'
import { CartContext } from '../providers/cartcontext'

export const useCart = () =>{
    return useContext(CartContext)
}