import React from 'react'
import './Nav.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Nav = () => {
  return (
    <div className='nav'>
        <div className="one"><h2>Pabi</h2></div>
        <div className="two">
            <ul>
                <li><Link to="page1">page -1</Link></li>
                <li><Link to="page2">page -2</Link></li>
                <li><Link to="page3">page -3</Link></li>
            </ul>
        </div>
        <div className="three">
            <button>contact</button>
        </div>
    </div>
  )
}

export default Nav