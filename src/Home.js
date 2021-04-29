import GetURL from "./components/GetURL";
import PickArticle from "./components/PickArticle";
import DisplayArticles from "./components/DisplayArticles";
import GameOver from "./components/GameOver";
import Title from "./components/Title";

function Home(props) {

    const philosophy_url = 'https://en.wikipedia.org/wiki/Philosophy';

    const articlesLength = () => {
        return props.articles.length
    }

    const getTitle = () => {
        return props.articles[props.articles.length - 1]['title'];
    }

    const getLinks = () => {
        return props.articles[props.articles.length - 1]['links'];
    }

    const game_over = () => {
        return props.articles[props.articles.length - 1]['self'] === philosophy_url;
    }

    return (
        <div>
            {articlesLength() === 0 && <Title />}
            {articlesLength() === 0 && <GetURL setArticles={props.setArticles} />}
            {articlesLength() > 0 && game_over() && <GameOver length={articlesLength} setArticles={props.setArticles} />}
            {articlesLength() > 0 && !game_over() && <PickArticle setArticles={props.setArticles} title={getTitle} links={getLinks} remove_last_article={props.remove_last_article} />}
            {articlesLength() > 0 && <DisplayArticles articles={props.articles} />}
        </div>
    );
};

export default Home;