import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/Header.component';
import AuthenticationPage from './pages/authentication-page/AuthenticationPage.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign-in" component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
