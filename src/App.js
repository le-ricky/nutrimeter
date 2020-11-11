import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard/Dashboard';
import Settings from './containers/Settings/Settings';
import FoodDatabase from './containers/FoodDatabase/FoodDatabase';
import Header from './components/Navigation/Header/Header';

import { auth } from './Firebase/firebase.utils';


class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="ui container">
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Route path="/" exact component={Dashboard}/>
          <Route path="/settings" component={Settings} />
          <Route path="/fooddatabase" component={FoodDatabase} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
