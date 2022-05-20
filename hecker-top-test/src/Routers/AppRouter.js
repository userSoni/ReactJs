import React from "react";
import Header from "../Components/Header.js";
// import HomePage from "../Components/HomePage.js";
import PageNotFound from "../Components/NotFound.js";
import ShowStories from "../Components/ShowStories.js";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import '../Styles/style.scss';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element = {<Navigate replace to="/top"/>} exact={true} /> 
            <Route path="/:type" element={<ShowStories />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    
    );
};

export default AppRouter;