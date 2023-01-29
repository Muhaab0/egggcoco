import { Routes, Route  } from "react-router-dom";
import About from "./pages/about/about";
import Contactus from "./pages/contactus/contactus";
import CustomPackage from "./pages/customPackage/customPackage";
import Home from "./pages/home/home";
import Works from "./pages/works/works";
import {QueryClient, QueryClientProvider} from "react-query"

function App() {
  const client = new QueryClient();
  return (
    <div className="App">
    <QueryClientProvider client={client}>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/ourworks" element={<Works />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/custompackage" element={<CustomPackage />}/>
        </Routes>
    </QueryClientProvider>
    </div>
  );
}

export default App;
