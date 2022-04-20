import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Article from "./components/Article";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Article />
    </div>
  );
}

export default App;
