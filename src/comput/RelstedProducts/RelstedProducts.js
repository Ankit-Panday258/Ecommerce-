import './RelstedProducts.css';
import data_product from '../all data/data';
import Item from '../item/item'
const RelstedProducts = () =>{
       return(
        <div className="RelstedProducts">
           <h1>Relsted Products</h1> 
           <hr/>
           <div className='RelstedProducts-item'>
               {data_product.map((item,i)=>{
                  return <Item  key={i}
                  id={item.id} 
                  name={item.name} 
                  image={item.image} 
                  new_price={item.new_price} 
                  old_price={item.old_price}/>
               })}
           </div>
        </div>
       )
}
export default RelstedProducts ;