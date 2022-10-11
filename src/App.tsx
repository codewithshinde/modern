import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import EmpDetails from "./components/EmpDetails";
import Featured from "./components/Featured";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import NoMatch from "./components/NoMatch";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";

const App: React.FunctionComponent = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}>
          <Route index element={<NewProducts />} />
          <Route path="new" element={<NewProducts />} />
          <Route path="featured" element={<Featured />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>
        <Route path="/about/emp" element={<EmpDetails />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
};

export default App;
