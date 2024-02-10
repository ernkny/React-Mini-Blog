import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Layout from "../modules/Layout";
import AuthorsScreen from "../screens/AuthorsScreen";
import BlogAddScreen from "../screens/BlogAddScreen";
import BlogDetailScreen from "../screens/BlogDetailScreen";
import BlogUpdateScreen from "../screens/BlogUpdateScreen";
import BlogsScreen from "../screens/BlogsScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import "../../src/App.css";
import ProtectedRoute from "./ProtectedRoute";
import ProfileScreen from "../screens/ProfileScreen";
import MyBlogsScreen from "../screens/MyBlogsScreen";
import AllBlogsScreen from "../screens/AllBlogsScreen";

const MainRoutes = () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation: Location };
  return (
    <>
        <Routes  location={state ? state.backgroundLocation : location}>
            <Route  path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
              <Route path="/AllBlogs" Component={AllBlogsScreen} />
              <Route path="/MyBlogs" Component={MyBlogsScreen} />
              <Route path="/BlogDetail/:id" Component={BlogDetailScreen} />
              <Route path="/BlogAdd" Component={BlogAddScreen} />
              <Route path="/BlogDelete/:id" Component={RegisterScreen} />
              <Route path="/BlogUpdate/:id" Component={BlogUpdateScreen} />
              <Route path="/Authors" Component={AuthorsScreen} />
              <Route path="/Blogs/:id" Component={BlogsScreen} />
              <Route path="/Profile" Component={ProfileScreen} />
              <Route path="/Profile/:id" Component={ProfileScreen} />
            </Route>
          <Route path="/Login" Component={LoginScreen} />
          <Route path="/Register" Component={RegisterScreen} />
        </Routes>
    </>
  );
};

export default MainRoutes;
