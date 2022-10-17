import Header from "./Header";
import Hero from "./Hero";
import Article from "./Article";
import Articles from "./Articles";
import Footer from "./Footer";

function App(){
  return (
    <>
      <div className="main">
        <Header />
        <Hero />
        <Article />
        <Articles />
        <Footer />
      </div>
    </>
  )
};

export default App;