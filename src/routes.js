import { Route, useRoutes } from "react-router-dom";
// import Home from "./components/HomePage";
import HomePage from "./components/HomePage/";
import DisplayAllPosts from "./components/HomePage/DisplayAllPosts";
import NewPost from "./components/CreateNewPost/NewPost";
import AddNewPost from "./components/HomePage/AddNewPost";
import ShowPost from "./components/ShowPage/ShowPost";
import NavNewPost from './components/CreateNewPost/NavNewPost.js'
import SignIn from "./components/SignIn/Up/SignIn";
import InputField from './components/fields/InputField'
import Form from './components/CreateNewPost/Form'
import NavSignUp from "./components/SignIn/Up/SignUp/NavSignUp";
import SignUp from "./components/SignIn/Up/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import EditPost from "./components/EditPost/EditPost";
import { TitleBar } from "./components/AdminPannal/TitleBar";
const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/newPost", element: <NewPost /> },
    { path: "/home", element: <DisplayAllPosts /> },
    { path: "/addNewPost", element: <AddNewPost /> },
    { path: "/showPost", element: <ShowPost /> },
    { path: "/navNewPost", element: <NavNewPost /> },
    { path: "/signin", element: <SignIn /> },
    { path: "/input", element: <InputField /> },
    { path: "/form", element: <Form /> },
    { path: "/navsignup", element: <NavSignUp /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/footer", element: <Footer /> },
    { path: "/editpost", element: <EditPost /> },
    { path: "/information", element: <TitleBar /> }

  ]);
  return routes;
};
export default Routes;
