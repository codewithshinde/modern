import * as React from "react";
import { useNavigate } from "react-router-dom";

interface IEmpDetailsProps {}

const EmpDetails: React.FunctionComponent<IEmpDetailsProps> = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Hi, XXX</h1>
      <p>Description: test person</p>
      <button onClick={() => navigate(-1)}><h1>GO BACK</h1></button>
    </>
  );
};

export default EmpDetails;
