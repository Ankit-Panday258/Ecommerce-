import './ProductDisplay.css';
import star_icon from '../all data/star_icon.png';
import star_dull_icon from '../all data/star_dull_icon.png'
const ProductDisplay =(props) =>{
    const {product} =props;
    return(
        <div className="ProductDisplay">
            <div className='ProductDisplay-left'>
                <div className='ProductDisplay-img-list'>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
                <div className='ProductDisplay-img'>
                    <img className='ProductDisplay-mani-img' src={product.image} alt=""/>
                </div>
            </div>
            <div className='ProductDisplay-right'>
                <h1>{product.name}</h1>
                <div className='productDisplay-right-star'>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_dull_icon} alt=""/>
                    <p>{122}</p>
                </div>
                <div className='ProductDisplay-right-priges'>
                    <div className='prodeuctDisplay-right-price-old'>
                        ${product.old_price}
                    </div>
                    <div className='prodeuctDisplay-right-price-new'>
                        ${product.new_price}
                    </div>
                    <div className='prodeuctDisplay-right-description'>
                    Oversized Internet is Broken Hoodie: Elevate your street style with our Olive Green Internet is Broken Printed Oversized Hoodie for men.
                    </div>
                    <div className='prodectDisplay-right-size'>
                        <h1>Select Size</h1>
                        <div className='prodectDisplay-right-sizes'>
                            <div>S</div>
                            <div>L</div>
                            <div>X</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button>ADD To CART</button>
                    <p className='pardectDisplay-right-category'><span>category : </span>Women , T-Shirt , Crop Top</p>
                    <p className='pardectDisplay-right-category'><span>Tags : </span>Modern , Latest</p>
                </div>
            </div>
        </div>
    )
}
export default ProductDisplay;