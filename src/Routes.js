import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";


const Home = React.lazy(() => import("./components/home"));
const ContactUs = React.lazy(() => import("./components/contact"));
const AboutUs = React.lazy(() => import("./components/about"));
const Navbar = React.lazy(() => import("./components/navCount"));
const Product = React.lazy(() => import("./components/products"));

export default function Routes() {
  return (
    <Suspense fallback="loading">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/about" exact component={AboutUs} />
        <Route path="/navbar" exact component={Navbar} />
        <Route path="/product" exact component={Product} />
      </Switch>
    </Suspense>
  );
}
