import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CmsDisplay from "./components/Header/CmsDisplay";
import MenuDetail from "./components/Header/MenuDetail";
import { Errorfound } from "./components/error404/Errorfound";
import { Home } from "./pages/Home";
import { FooterDetails } from "./components/Footer/FooterDetails";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      {/* <Route exact path="/" element={<CmsDisplay/>} /> */}
      <Route exact path="/" element={<Home/>} />
      <Route path="/menu/:id" element={<MenuDetail/>} />
      <Route path="/footer/:id" element={<FooterDetails/>} />
      <Route path="*" element ={<Errorfound/>} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
