import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Articles from "./components/Articles";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Articles />
    </div>
  );
}

export default App;
