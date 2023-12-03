import  './navbar.css';
import logo from '../all data/logo.png'
import cart_icon from '../all data/cart_icon.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
function  Navber () {
    const [menu, setMenu ] = useState("shop");
    return (
        <div className='navber'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() =>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu === "shop"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("mans")}}><Link style={{textDecoration: 'none'}}  to='/mens'>Man</Link>{menu === "mans"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to = '/womens'>women</Link>{menu ==="womens"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("kids")}}><Link style={{textDecoration: 'none'}}  to='/kids'>kids</Link>{menu === "kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Longin</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navber ;
