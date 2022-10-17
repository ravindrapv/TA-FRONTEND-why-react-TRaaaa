import Article from "./Article"
import data from "./data"

function Articles() {
    return (
        <div className="articles">
          {data.map((article) => (
            <Article key={article.publishedAt} {...article}/>
            ))}
        </div>
    )
  }

  export default Articles