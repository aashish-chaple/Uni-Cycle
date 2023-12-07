import "../styles/HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = ({setid}) => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts());

  }, [dispatch]);
  return (
    <div className="homescreen">
      <div className="container text-center">
        <h1 className="mt-3">Clothing</h1>
        <hr className="w-25 mx-auto" />
      </div>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => product.category === "Clothing" && (
            <Product
              key={product._id}
              imgsrc={product.imgsrc}
              title={product.title}
              description={product.description.length > 150 ? product.description.slice(0, 150) + "..." : product.description}
              location={product.location}
              quantity={product.quantity}
              price={product.price}
              productId={product._id}
            />
          )
          )
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
