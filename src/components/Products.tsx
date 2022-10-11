import * as React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import Product from "./Product";

interface IProductsProps {}

const Products: React.FunctionComponent<IProductsProps> = (props) => {
    const [searchParam, setSearchParam] = useSearchParams();
    const showOnlyActive = searchParam.get("active") === "true" || false;
  return (
    <>
      <h1>Products</h1>
        <button onClick={() => setSearchParam({active: "true"})}>Active</button>
        <button onClick={() => setSearchParam({})}>Reset</button>
      <nav>
        <NavLink to="new">New</NavLink>
        <NavLink to="featured">Featured</NavLink>
      </nav>
      {[...new Array(10)].map((pid: number, index: number) => (
        showOnlyActive ? 
        index % 2 === 0 && <Product key={index} productNumber={index} isActive={true}/> :
        <Product key={index} productNumber={index} isActive={index % 2 === 0}/>
      ))}
    </>
  );
};

export default Products;
