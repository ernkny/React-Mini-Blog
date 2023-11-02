import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import MainMenu from './modules/MainMenu'
import HomeScreen from './screens/HomeScreen'
import BlogDetailScreen from './screens/BlogDetailScreen'

function App() {

  return (
      <>
       <MainMenu/>
        <BrowserRouter>
           <Routes>
            <Route path="/" Component={HomeScreen} />
              <Route path="/BlogDetail/:id" Component={BlogDetailScreen} />
            </Routes>
      </BrowserRouter>
     
      </>
  )
}

export default App
