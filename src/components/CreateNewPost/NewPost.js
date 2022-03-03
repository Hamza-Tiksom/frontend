import React from "react";
import Home from "../HomePage/Home";
import Footer from "../Footer/Footer";
import Form from "./Form"

export default function NewPost() {
  return (
    <div>
      <Home name="New Post" />
      <Form />
      <Footer />
    </div>
  );
}
