import React from 'react'
import {  Header, Footer, Cards, SecondPage } from '../../components';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

export const Home = () => {
  return (
    <Router>
      <div className="Container">
      <Header/>
      <Switch>
          <Route exact path="/" component={Cards} />
          <Route path="/second" component={SecondPage} />
      </Switch>
      <Footer/>
    </div>
  </Router>

  );
}

