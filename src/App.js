import './App.css'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Photos from './components/Photos';
import { Link, Route } from "wouter";
import bootstrap from 'bootstrap';
import Home from './components/Home';


function App(){
  return( <>
 <Link href="/components/Photos">
      <button className="btn btn-primary m-2">Photos</button>
    </Link>
    <Route path="/components/Photos" component={Photos} />
  </>)
 
}
export default App;