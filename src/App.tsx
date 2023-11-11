import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import MainMenu from './modules/MainMenu'
import HomeScreen from './screens/HomeScreen'
import BlogDetailScreen from './screens/BlogDetailScreen'
import BlogAddScreen from './screens/BlogAddScreen'
import LoginScreen from './screens/LoginScreen'
import Footer from './modules/Footer'
import RegisterScreen from './screens/RegisterScreen'

function App() {

  return (
      <>
       <MainMenu/>
        <BrowserRouter>
           <Routes>
            <Route path="/" Component={HomeScreen} />
              <Route path="/BlogDetail/:id" Component={BlogDetailScreen} />
              <Route path="/BlogAdd" Component={BlogAddScreen} />
              <Route path="/Login" Component={LoginScreen} />
              <Route path="/Register" Component={RegisterScreen} />
            </Routes>
      </BrowserRouter>
     <Footer/>
      </>
  )
}

export default App
