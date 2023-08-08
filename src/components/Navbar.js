import React, { Component } from 'react'
// import Home from './Home';

import bootstrap from 'bootstrap';
import { Link, Route } from "wouter";
import Photos from './Photos';
import './Navbar.css'

const Navbar = () => (
  <div className='linkphotos'>
    <Link href="/Photos">
      <button className="btn btn-primary m-2">Photos</button>
    </Link>
    <Route path="/Photos" component={Photos} />
    
  </div>
);

export default Navbar;