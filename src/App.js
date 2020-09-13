import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostsPage from './pages/PostPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route excat path="/" component={PostsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
