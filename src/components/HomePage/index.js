import DisplayAllPosts from "./DisplayAllPosts";
import AddNewPost from "./AddNewPost";
import React from "react";
import Home from "./Home";
import Footer from "../Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <Home />
      <DisplayAllPosts />
      <AddNewPost />
      <Footer />
    </div>
  );
}
