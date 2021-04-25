import PickArticle from "./PickArticle";

function Play(props) {

    const articlesLength = () => {
        return props.articles.length
    }

    const getTitle = () => {
        return props.articles[props.articles.length - 1]['title'];
    }

    const getLinks = () => {
        return props.articles[props.articles.length - 1]['links'];
    }

    return (
        <div>
            {articlesLength() > 0 && <PickArticle setArticles={props.setArticles} title={getTitle()} links={getLinks()} />}
        </div>
    );
}

export default Play;