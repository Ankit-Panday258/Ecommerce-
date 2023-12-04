import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../comput/Breadcrums/Breadcrums";
import ProductDisplay from "../comput/ProductDisplay/ProductDisplay";
import DescriptionBox from "../comput/DescriptionBox/DescriptionBox";
import RelstedProducts from "../comput/RelstedProducts/RelstedProducts";

const Product =()=>{
    const {all_product} = useContext(ShopContext)
    const {productId} = useParams();
    const product = all_product.find((e)=>e.id===Number(productId))
    return (
        <div>
            <Breadcrums product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelstedProducts/>
        </div>
    )
}

export default Product ;