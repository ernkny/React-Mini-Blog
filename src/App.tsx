import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './modules/Layout'
import MyBlogsScreen from './screens/MyBlogsScreen'
import BlogDetailScreen from './screens/BlogDetailScreen'
import BlogAddScreen from './screens/BlogAddScreen'
import LoginScreen from './screens/LoginScreen'
import AuthorsScreen from './screens/AuthorsScreen'
import BlogUpdateScreen from './screens/BlogUpdateScreen'
import BlogsScreen from './screens/BlogsScreen'
import RegisterScreen from './screens/RegisterScreen'
import './App.css'

function App() {

  return (
      <>
        <BrowserRouter>
                <Routes>
                    <Route path='/' Component={Layout} >
                        <Route path="/MyBlogs" Component={MyBlogsScreen} />
                        <Route path="/BlogDetail/:id" Component={BlogDetailScreen} />
                        <Route path="/BlogAdd" Component={BlogAddScreen} />
                        <Route path="/Login" Component={LoginScreen} />
                        <Route path="/Register" Component={RegisterScreen} />
                        <Route path="/BlogDelete/:id" Component={RegisterScreen}/>
                        <Route path="/BlogUpdate/:id" Component={BlogUpdateScreen}/>
                        <Route path="/Authors" Component={AuthorsScreen}/>
                        <Route path="/Blogs/:id" Component={BlogsScreen}/>
                    </Route>
                    </Routes>
            </BrowserRouter>
      </>
  )
}

export default App
