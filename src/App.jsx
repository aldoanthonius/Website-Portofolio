import "./App.css";
import Home from "./pages/Home";
import DetailPortfolio from "./pages/DetailPortfolio";
import PageNotFound from "./pages/PageNotFound";
import Experience from "./pages/Experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/portofolio/:id' element={<DetailPortfolio/>} />
        <Route path='/page-not-found' element={<PageNotFound/>} />
        <Route path='*' element={<PageNotFound/>} />
        <Route path='/experience' element={<Experience/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
