import React from "react";
import Header from "../Components/Header.js";
import HomePage from "../Components/HomePage.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" component={HomePage} exact={true} />
            {/* <Route component={PageNotFound} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    
    );
};

export default AppRouter;