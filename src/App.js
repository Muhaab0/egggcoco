import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import Contactus from "./pages/contactus/contactus";
import CustomPackage from "./pages/customPackage/customPackage";
import Home from "./pages/home/home";
import Works from "./pages/works/works";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/desa" element={<Home />}/>
        <Route path="/egcoco4" element={<Home />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/ourworks" element={<Works />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/custompackage" element={<CustomPackage />}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
