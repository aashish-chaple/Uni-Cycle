import "../styles/ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = () => {

  let { id } = useParams(); 

  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate(`/cart`);
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imgsrc} alt={product.title} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.title}</p>
              <p> <span style={{fontWeight: "bold",fontSize:"14px"}}>Price:</span> ${product.price}</p>
              <p ><span style={{fontWeight: "bold",fontSize:"14px"}}>Description:</span> {product.description}</p>
              <p> <span style={{fontWeight: "bold",fontSize:"14px"}}>Quantity:</span> {product.quantity}</p>
              <p> <span style={{fontWeight: "bold",fontSize:"14px"}}>Location:</span> {product.location}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.quantity > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.quantity).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
