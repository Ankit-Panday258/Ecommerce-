import './Footer.css'
import footer_logo from '../all data/logo_big.png';
import instagram_icon from '../all data/instagram_icon.png';
import pintest_icon from '../all data/pintester_icon.png';
import whatsapp_icon from '../all data/whatsapp_icon.png'
const Footer = () =>{
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt=""/>
                <p>SHOPPER</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                    <img src={instagram_icon} alt=""/>
                </div>
                <div className='footer-icons-container'>
                    <img src={pintest_icon} alt=""/>
                </div>
                <div className='footer-icons-container'>
                    <img src={whatsapp_icon} alt=""/>
                </div>
            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>Copyright @ 2023 -All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer ;