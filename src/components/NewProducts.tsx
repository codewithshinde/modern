import * as React from "react";
import { Outlet } from "react-router-dom";

interface INewProductsProps {}

const NewProducts: React.FunctionComponent<INewProductsProps> = (props) => {
  return (
    <>
      <h1>New products</h1>
      <Outlet />
    </>
  );
};

export default NewProducts;
