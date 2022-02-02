import "./App.css";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Update from "./components/Update";
import View from "./components/View";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/FontAwesomeIcons/Icon";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
