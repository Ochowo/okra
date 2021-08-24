import React from 'react';
import { Switch as Router, Route } from 'react-router-dom';
import Recommendations from '../features/Rec';
import Reports from '../features/Reports';

const App = () => (
  <Router>
    <Route path="/" exact component={Recommendations} />
    <Route path="/reports" exact component={Reports} />
  </Router>
);
export default App;
