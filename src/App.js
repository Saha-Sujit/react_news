import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Categories />} />
          <Route path="/search" exact element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
