import { createContext, useState } from "react";
import all_product from '../comput/all data/all_product'
export const ShopContext = createContext(null);
// cart 
const getDefaulCart = () =>{
    let cart = {}
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]= 0;
    }
    return cart ; 
}
const ShopContextProvider = (props) =>{
    const [cartItems, SetCartItems] = useState(getDefaulCart());
    const addToCart = (itemId) =>{
        SetCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeFromeToCart = (itemId) =>{
        SetCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmout = ()=>{
        let totalAmout = 0 ;
        for(const it in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmout += itemInfo.new_price * cartItems [item];
            }
            return totalAmout ;
        }
    }
    const ContextValue = {getTotalCartAmout,all_product,cartItems,addToCart,removeFromeToCart};
    return(
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider ;