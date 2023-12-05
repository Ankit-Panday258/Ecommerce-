import { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../all data/cart_cross_icon.png'
const CartItem = () =>{
    const {getTotalCartAmout,all_product,cartItems,addToCart,removeFromeToCart} = useContext(ShopContext);
    return(
        <div className="CartItem">
           <div className='CartItem-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
           </div> 
           <hr/>
         {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                <div className='CartItem-format CartItem-format-main'>
                   <img className='CartItem-product-icon' src={e.image} alt=""/>
                   <p>{e.name}</p>
                   <p>{e.new_price}</p>
                   <button className='CartItem-quatity'>{cartItems[e.id]}</button>
                   <p>${e.new_price*cartItems[e.id]}</p>
                   <img className='cartItem-remove_icon' src={remove_icon} onClick={()=>{removeFromeToCart(e.id)}} alt=""/>
                </div>
                <hr/>
             </div>
            }
            return null;
         })}
         <div className='CartItems-down'>
            <div className='CartItem-total'>
                <h1>Cart Total</h1>
                <div>
                    <div className='CartItem-total-item'>
                        <p>Subtatal</p>
                        <p>{getTotalCartAmout()}</p>
                    </div>
                    </div>
                    <hr/>
                    <div className='CartItem-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='CartItem-total-item'>
                        <h3>Total</h3>
                        <h3>${getTotalCartAmout()}</h3>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className='CartItem-promocode'>
                    <p>If you have a  promo code, Enter it here </p>
                    <div className='CartItem-promobox'>
                        <input type="text" placeholder='Promo Code'/>
                        <button >Submit</button>
                    </div>
                </div>
            </div>
         </div>
        
    )
}
export default CartItem;