import React, { Component } from 'react'
import Home from './Home';
// import AboutUs from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';
// import './pages.css';
// import Courses from './pages/Courses';
// import PayFees from './pages/PayFees';
import bootstrap from 'bootstrap';
import { Link, Route } from "wouter";

const Navbar = () => (
  <div>
    <Link href="/Home">
      <button className="btn btn-primary m-2">Home</button>
    </Link>

    <Route path="/Home" component={Home} />
  </div>
);

export default Navbar;