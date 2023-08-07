import logo from './logo.svg';
import './App.css';
import Photos from './components/Photos';
import { Link, Route } from "wouter";
import bootstrap from 'bootstrap';
import ProfilesComponent from './components/comments';
import ToDoApp from './components/ToDoApp/ToDoApp';

function App() {
  return (
    <div className="App">
      {/* <div>
        <Link href="/Photos.jsx">
          <button className="btn btn-warning m-2">Photos</button>
        </Link>
        <Link href="/comments.jsx">
          <button className="btn btn-warning me-2">Comments</button>
        </Link>
        <Route path="/Photos.jsx" component={Photos} />
        <Route path="/comments.jsx" component={ProfilesComponent} />
      </div> */}
      <div>
        <ToDoApp />
      </div>
    </div>
  );
}

export default App;
