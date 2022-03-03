import React from "react";
// import { useHistory } from "react-router-dom";
// import Button from "@material-ui/core/Button";
// import NewPost from "../CreateNewPost/NewPost";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";




export default function AddNewPost() {
  // const navigate = useNavigate();
onclick=()=>{

}
  return (
    <div>
      <Button variant="contained" className="mt-5" component={Link} to={"/NewPost"} >
        NewPost
      </Button>
    </div>
  );
}
