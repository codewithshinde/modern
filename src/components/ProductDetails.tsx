import * as React from "react";
import { useParams, useSearchParams } from "react-router-dom";

interface IProductDetailsProps {}

const ProductDetails: React.FunctionComponent<IProductDetailsProps> = () => {
  const { productId } = useParams();
  return (
    <div className="product-details">
      <h1>Product Details</h1>
      <h3>Product Number {productId}</h3>
    </div>
  );
};

export default ProductDetails;
