import React, { useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import Header from './components/header/header-component';
import { setCurrentUser } from './redux/user/user.actions';
import SignInAndSignUp from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPage from './pages/collection/collection.component';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          {/* <Route exact path='/shop/:categoryId' component={CollectionPage} /> */}
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  collectionsArray: selectCollectionsForPreview(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
