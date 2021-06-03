import { useState } from "react";
import './App.css';
import Nav from "./components/Nav";
import Home from "./Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {

  const [articles, setArticles] = useState([]);

  const remove_last_article = () => {
    setArticles(articles.slice(0, articles.length - 1))
  }

  return (
    <Router>
      <div className="App">
        <Nav setArticles={setArticles}/>
        <Switch>
          <Container className="mainContent">
            {<Route path="/" exact render={() => <Home setArticles={setArticles} articles={articles} remove_last_article={remove_last_article} />} />}
          </Container>
        </Switch>
        <Footer />
      </div>
    </Router>


  );
}

export default App;
