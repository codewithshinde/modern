import * as React from "react";
import { Outlet } from "react-router-dom";

interface IFeaturedProps {}

const Featured: React.FunctionComponent<IFeaturedProps> = (props) => {
  return (
    <>
      <h1>Featured</h1>
      <Outlet />
    </>
  );
};

export default Featured;
