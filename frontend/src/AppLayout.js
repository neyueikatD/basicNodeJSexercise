import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import Posts from "./Posts";
import Post from "./Post";
import PostLists from "./PostLists";

function AppLayout() {

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/posts" className="nav-link">
          Posts
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Posts/>}>
          <Route index element={<PostLists/>}/>
          <Route path=":slug" element={<Post/>}/>
        </Route> 
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </>
  );
}

export default AppLayout;
