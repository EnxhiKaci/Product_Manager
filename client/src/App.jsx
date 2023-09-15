import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import Detail from "./components/Detail";
import ProductUpdate from './components/ProductUpdate '


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Main />} path="/products" />
          <Route element={<Detail />} path="/products/:id" />
          <Route element={<ProductUpdate />} path="http://localhost:8000/api/products/${id}" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
