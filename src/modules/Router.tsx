import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import BlogDetailScreen from '../screens/BlogDetailScreen'
import BlogAddScreen from '../screens/BlogAddScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

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
<<<<<<< HEAD
                <Route path="/BlogDelete/:id" Component={RegisterScreen}/>
=======
>>>>>>> 523778f8f68e3d03c9361b8fd20f343d3671bce8
                </Routes>
        </BrowserRouter>
      </>
  )
}

export default Router