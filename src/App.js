import React from 'react';
import HomePage from './pages/homepage/HomePage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/Header.component';
import AuthenticationPage from './pages/authentication-page/AuthenticationPage.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log('cWillUnmount()');
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={AuthenticationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
