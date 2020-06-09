import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shoppage from './components/shop/shop.component';

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
