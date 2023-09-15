import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductsList from '../components/ProductsList';

const Main = (props) => {
  const [products, setProducts] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  const handleProductCreate = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const handleCreateClick = () => {
    // Perform any actions you need here
    onProductCreate(newProduct); // Call the function here if needed
  };

  return (
    <>
      <ProductForm
        products={products}
        setProducts={setProducts}
        setUpdated={setUpdated}
        updated={updated}
      />
      <hr />
      <ProductsList
        onProductCreate={handleProductCreate}
        products={products}
        setProducts={setProducts}
        setUpdated={setUpdated}
        updated={updated}
      />
    </>
  );
};

export default Main;
