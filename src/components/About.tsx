import * as React from "react";
import { useNavigate } from "react-router-dom";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>About Page</h1>
      <button onClick={() => navigate("/about/emp")}><h1>CEO</h1></button>
    </>
  );
};

export default About;
