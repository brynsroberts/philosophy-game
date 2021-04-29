import { useState } from "react";
import './App.css';
import Nav from "./components/Nav";
import Tutorial from "./Tutorial";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [articles, setArticles] = useState([]);

  const remove_last_article = () => {
    setArticles(articles.slice(0,articles.length - 1))
  }

  return (
    <Router>
      <div className="App">
        <Nav setArticles={setArticles} articles={articles} />
        <Switch>
          {/* <Route path="/" exact render={() => <Game setArticles={setArticles} articles={articles} remove_last_article={remove_last_article} />} /> */}
          { <Route path="/" exact render={() => <Home setArticles={setArticles} articles={articles} remove_last_article={remove_last_article} />} /> }
          <Route path="/tutorial" component={Tutorial} />
        </Switch>

      </div>
    </Router>


  );
}

export default App;
