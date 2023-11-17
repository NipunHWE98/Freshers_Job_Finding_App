// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/loginpage/LoginPage.jsx';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
