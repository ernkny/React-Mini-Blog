import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import BlogDetailScreen from '../screens/BlogDetailScreen'
import BlogAddScreen from '../screens/BlogAddScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import BlogUpdateScreen from '../screens/BlogUpdateScreen'
import AuthorsScreen from '../screens/AuthorsScreen'

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={HomeScreen} />
                <Route path="/BlogDetail/:id" Component={BlogDetailScreen} />
                <Route path="/BlogAdd" Component={BlogAddScreen} />
                <Route path="/Login" Component={LoginScreen} />
                <Route path="/Register" Component={RegisterScreen} />
                <Route path="/BlogDelete/:id" Component={RegisterScreen}/>
                <Route path="/BlogUpdate/:id" Component={BlogUpdateScreen}/>
                <Route path="/Authors" Component={AuthorsScreen}/>
                </Routes>
        </BrowserRouter>
      </>
  )
}

export default Router