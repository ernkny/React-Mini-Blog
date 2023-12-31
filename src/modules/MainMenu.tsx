import { Input, Menu } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import logo from "../pictures/Gb-Logo.png";
import '../styles/MainMenu.css'



 const MainMenu = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   
    function getFirstWidth(){
      var  searchMenuElement=document.getElementById("Search");
        if(windowWidth<=768){
              searchMenuElement!.style.display="none";
            }else 
            {
              searchMenuElement!.style.display="block";
            }
    }

      useEffect(() => {
        getFirstWidth()
      }, [windowWidth])

    useEffect(() => {
      const handleResize = () => { 
        var  searchMenuElement=document.getElementById("Search");
        const newWidth = window.innerWidth;
        if (newWidth<=768 && windowWidth<=768) {
          searchMenuElement!.style.display="none";
        }else 
        {
          searchMenuElement!.style.display="block";
        }
        setWindowWidth(newWidth);}
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
  return (
    <Menu className="mainMenu" id="main-menu">
        <img src={logo} width={50} height={50} />
        <Menu.Item
          name='Blogs'
        >
          <a style={{color: "white"}} href='/'><span>Blogs</span></a>
        </Menu.Item>

        <Menu.Item
          name='Authors'
        >
          <a style={{color: "white"}} href='/'><span>Authors</span></a>
        </Menu.Item>

        <Menu.Item
          name='BookMarks'
        >
           <a style={{color: "white"}} href='/'><span>Bookmark</span></a>
        </Menu.Item>

        <Menu.Item
          name='login'
        >
          <a style={{color: "white"}} href='/login'><span>Login</span></a>
        </Menu.Item>

        <Menu.Item
          name='register'
        >
          <a style={{color: "white"}} href='/Register'><span>Register</span></a>
        </Menu.Item>

        <Menu.Menu position='right' id="Search">
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
      </Menu>
  )
}

export default MainMenu;

