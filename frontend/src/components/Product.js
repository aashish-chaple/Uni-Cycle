import "../styles/Product.css";
import { Link } from "react-router-dom";

const Product = ({ imgsrc, title, description, quantity, location,price,productId,setid }) => { 
  // console.log(productId);
  return (
    <div className="product">
      <img src={imgsrc} alt={title} />

      <div className="product__info">
        <p style={{fontWeight: "bold",fontSize:"22px"}} className="info__name mt-4">{title}</p>

        <p  className="info__description"><span style={{fontWeight: "bold",fontSize:"14px"}}>Description: </span>{description}</p>
        {/* <p  className="info__description"><span style={{fontWeight: "bold",fontSize:"14px"}}>Quantity: </span>{quantity}</p> */}
        {/* <p  className="info__description"><span style={{fontWeight: "bold",fontSize:"14px"}}>Location: </span>{location}</p> */}

        <p className="info__price">${price}</p>
        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
