import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductsList = (props) => {
  const { products, setProducts } = props;
  const { updated, setUpdated } = props;
  const [isLoading, setIsLoading] = useState(true); 
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log("Products data:", res.data);
        setProducts(res.data);
        setIsLoading(false); 
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); 
      });
  }, [updated]);

  

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setUpdated(!updated);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>All Products</h2>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product, index) => (
          <div key={index}>
            <Link to={`/products/${product._id}`}>{product.title}</Link>
            <Link to={`/products/edit/${product._id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={(e) => deleteProduct(product._id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductsList;

