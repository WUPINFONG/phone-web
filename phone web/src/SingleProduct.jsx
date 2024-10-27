import {Link,useParams} from 'react-router-dom';
import products from './data'

function SingleProduct() {
console.log(useParams());
const{shoppingId}=useParams();
const product=products.find((product)=> product.id === shoppingId);
const {image,name}=product;




return(
    <>
        <img src={image} alt={name}/>
        <h5>{name}</h5>
   
    <Link to="/shopping">go shopping</Link>
    </>
);



};
export default SingleProduct;