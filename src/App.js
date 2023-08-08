import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Photos from './components/Photos';
import { Link, Route } from "wouter";
import bootstrap from 'bootstrap';
<<<<<<< HEAD
import Navbar from './components/Navbar';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App(){
  return( 
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color=''>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Welcome to our Application
        </Typography>
        <Button color="inherit"><Navbar></Navbar></Button>
      </Toolbar>
    </AppBar>
  </Box>)
 
=======
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
>>>>>>> 621d2522b16fcb1dc392f1663e24547142e06704
}
export default App;