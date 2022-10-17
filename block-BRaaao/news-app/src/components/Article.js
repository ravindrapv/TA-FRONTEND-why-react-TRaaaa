

function Article(props){
    return (
        <div className="card">
        <img src="" alt="article" />
        <h2>{props.article.title}</h2>
        <p>{props.article.description}</p>
        </div>
    );
}

export default Article;