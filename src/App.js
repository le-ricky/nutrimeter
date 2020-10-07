import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard/Dashboard';
import Settings from './containers/Settings/Settings';
import FoodDatabase from './containers/FoodDatabase/FoodDatabase';
import Header from './components/Navigation/Header/Header';


function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Dashboard}/>
        <Route path="/settings" component={Settings} />
        <Route path="/fooddatabase" component={FoodDatabase} />
      </BrowserRouter>
    </div>
  );
}

export default App;
