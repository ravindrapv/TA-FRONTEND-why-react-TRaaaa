import Article from "../components/Article";
import Header from "./Header";
import Hero from "./Hero";
import data from "../components/data"
import Footer from "./Footer";

function App(){
  return (
    <>
      <div className="main">
        <Header />
        <Hero />
        <Articles />
        <Article />
        <Footer />
      </div>
    </>
  )
};

function Articles() {
  return (
      <div className="articles">
        {data.map((article) => (
          <Article key={article.id} {...article} />
          ))}
      </div>
  )
}


export default App;