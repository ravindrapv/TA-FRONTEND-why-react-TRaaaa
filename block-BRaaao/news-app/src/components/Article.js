
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

export default Article;