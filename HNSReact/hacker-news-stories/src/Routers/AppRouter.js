import React from "react";
import Header from "../Components/Header.js";
import HomePage from "../Components/HomePage.js";
import PageNotFound from "../Components/NotFound.js";
import ShowStories from "../Components/ShowStories.js";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import '../Styles/style.scss';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/:type" component={ShowStories} />
            <Route component={PageNotFound} />
          </Routes>
        </div>
      </BrowserRouter>
    
    );
};

export default AppRouter;