import React from "react";
import '../Styles/style.scss';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <React.Fragment>
          <h1>Hacker News Stories</h1>
          <div className="nav-link">
            <NavLink to="/top" className={({ isActive }) => isActive? "active": ''}>
              Top Stories
            </NavLink>
            <NavLink to="/new" className={({ isActive }) => isActive? "active": ''}>
              Latest Stories
            </NavLink>
            <NavLink to="/best" className={({ isActive }) => isActive? "active": ''}>
              Best Stories
            </NavLink>
          </div>
        </React.Fragment>
      );
};

export default Header;
