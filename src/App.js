import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBlog from "./component/AddBlog";
import Home from "./component/Home";
import Blogdetails from "./component/Blogdetails";
import Editblog from "./component/Editblog";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<AddBlog />} />
          <Route path="/blog/:id" element={<Blogdetails />} />
          <Route path="/edit/:id" element={<Editblog/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
