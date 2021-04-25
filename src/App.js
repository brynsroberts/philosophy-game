import { useState } from "react";
import './App.css';
import Nav from "./components/Nav";
import Tutorial from "./components/Tutorial";
import Game from "./components/Game";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [articles, setArticles] = useState([]);

  return (
    <Router>
      <div className="App">
        <Nav setArticles={setArticles} articles={articles} />
        <Switch>
          <Route path="/" exact render={() => <Game setArticles={setArticles} articles={articles} />} />
          <Route path="/tutorial" component={Tutorial} />
        </Switch>

      </div>
    </Router>


  );
}

export default App;
