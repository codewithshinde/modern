import * as React from 'react';

interface INoMatchProps {
}

const NoMatch: React.FunctionComponent<INoMatchProps> = (props) => {
  return <>
  <h1>Opps! Page not found.</h1>
  </>;
};

export default NoMatch;
