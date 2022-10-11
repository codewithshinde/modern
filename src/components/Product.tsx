import * as React from "react";

interface IProductProps {
  isActive: boolean;
  productNumber: number;
}

const Product: React.FunctionComponent<IProductProps> = ({
  isActive,
  productNumber,
}) => {
  return (
    <>
      <h1>Name: product {productNumber}</h1>
      <h3>Status: {isActive ? "active" : "inactive"}</h3>
    </>
  );
};

export default Product;
