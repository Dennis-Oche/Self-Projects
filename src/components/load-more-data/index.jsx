import { useEffect, useState } from "react";
import "./styles.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabledButton, setDisabledButton] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }

      console.log(data);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length >= 100) {
      setDisabledButton(true);
    }
  }, [products]);

  if (loading) {
    return (
      <div>
        <h2>Loading data! Please wait.</h2>
      </div>
    );
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          style={{ marginBottom: "20px" }}
          disabled={disabledButton}
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
        {disabledButton ? (
          <p>You have reached the maximum of 100 items.</p>
        ) : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
