import propTypes from 'prop-types'
function Article(props){
    return (
        <div className="card">
        <img src={props.urlToImage} alt="article" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.url}>visit all</a>
        </div>
    );
}

Article.propTypes = {
    title: propTypes.string.isRequired
}

export default Article;