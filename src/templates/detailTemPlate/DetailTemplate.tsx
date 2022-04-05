import Footer from '../layouts/footer/Footer';

import Header from '../layouts/header/Header';
import { Route } from 'react-router';

interface IpropsTemPlate {
  Component: any;
  path: string;
  exact: boolean;
}

export default function DetailTemplate(props: IpropsTemPlate) {
  let { Component, ...resRoute } = props;
  return (
    <Route
      {...resRoute}
      render={(propsRoute: object) => {
        return (
          <>
            <Header></Header>
            <Component {...propsRoute} />
            <Footer></Footer>
          </>
        );
      }}
    />
  );
}
