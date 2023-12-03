import Hero from "../comput/Hero/Hero";
import NewCollections from "../comput/NewCollections/NewCollections";
import NewsLetter from "../comput/NewsLetter/NewsLetter";
import Offers from "../comput/Offers/Offers";
import Propular from "../comput/Propular/Propular";

const Shop = () =>{
    return(
        <div>
            <Hero/>
            <Propular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}

export default Shop ;