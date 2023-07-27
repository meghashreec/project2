import logo from './logo.svg';
import './App.css';
import Photos from './components/Photos';
import { Link, Route } from "wouter";
import bootstrap from 'bootstrap';
import ProfilesComponent from './components/comments';

function App() {
  return (
    <div className="App">
      <Link href="/Photos.jsx">
        <button className="btn btn-primary m-2">Photos</button>
      </Link>
      <Link href="/comments.jsx">
        <button className="btn btn-primary me-2">Comments</button>
      </Link>
      <Route path="/Photos.jsx" component={Photos} />
      <Route path="/comments.jsx" component={ProfilesComponent} />
  
    </div>
  );
}

export default App;
