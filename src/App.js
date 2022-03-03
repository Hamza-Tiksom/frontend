import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Routes1 from "./routes";
import DisplayAllPosts from "./components/HomePage/DisplayAllPosts";
import AddNewPost from "./components/HomePage/AddNewPost";
import NewPost from "./components/CreateNewPost/NewPost";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './components/HomePage/Home'
import Index from "./components/HomePage";
import SignIn from "./components/SignIn/Up/SignIn";

function App() {
  return (
    <div className="App">
{/* <Home/> */}
{/* <DisplayAllPosts/> */}
      {/* <Index /> */}
      {/* <SignIn/> */}
      <Router>
        <Routes1 />
      </Router>
    </div>
  );
}

export default App;
