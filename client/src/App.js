import React from "react";
import Home from "./components/home.js";
import SignUpUseState from "./components/signup.js";
import Nav from "./components/navigationbar.js";
import SignInUseState from "./components/login.js";
import MyProfile from "./components/myProfile.js";
import Course from "./components/courses.js";
import Category from "./components/coursesBycategories.js";
import CourseDetails from "./components/coursedetails.js";
import UploadCourse from "./components/uploadcourse.js";
import { AuthContextProvider } from "./context/AuthContext.js";
import VideoPlayer from "./components/videoplayer";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import GetPoints from "./components/getpoints.js";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpUseState />} />
        <Route path="/signin" element={<SignInUseState />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/uploadcourse" element={<UploadCourse />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/getpoints" element={<GetPoints />} />
        <Route path="/courses/:id/video" element={<VideoPlayer />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
