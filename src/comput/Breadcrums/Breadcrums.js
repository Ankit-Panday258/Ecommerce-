import './Breadcrums.css';
import arrow_icon from '../all data/breadcrum_arrow.png'
const Breadcrums  = (props)=>{
    const {product} =props;
     
    return(
        <div className="breadcrums">
            HOME <img src={arrow_icon} alt=""/> 
            SHOP <img src={arrow_icon} alt=""/>
            Men{props.category} 
            <img src={arrow_icon} alt=""/>{product.name}
        </div>
    )
}
export default Breadcrums;