import { Button, Icon, Input, Menu } from "semantic-ui-react";
import { useEffect, useState } from "react";
import logo from "../pictures/Gb-Logo.png";
import "../styles/MainMenu.css";
import { setQueryTextForSearch } from "../store/Actions/blogActions";
import { logout } from "../store/Actions/authActions";
import { useNavigate } from "react-router";

const MainMenu = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [queryText, setQueryText] = useState("");
  const navigate = useNavigate();
  
  function getFirstWidth() {
    var searchMenuElement = document.getElementById("Search");
    if (windowWidth <= 768) {
      searchMenuElement!.style.display = "none";
    } else {
      searchMenuElement!.style.display = "block";
    }
  }
  const searchQueryText = () => {
    setQueryTextForSearch(queryText);
  };
  useEffect(() => {}, [queryText]);

  useEffect(() => {
    getFirstWidth();
  }, [windowWidth]);

  useEffect(() => {
    const handleResize = () => {
      var searchMenuElement = document.getElementById("Search");
      const newWidth = window.innerWidth;
      if (newWidth <= 768 && windowWidth <= 768) {
        searchMenuElement!.style.display = "none";
      } else {
        searchMenuElement!.style.display = "block";
      }
      setWindowWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function LogoutHandler(): any {
    logout();
  navigate("/");
  }
  function navigateProfile(): any {
  navigate("/Profile");
  }
  
  return (
    <Menu className="mainMenu" id="main-menu">
      <img src={logo} width={50} height={50} />
      <Menu.Item name="All Blogs">
        <a href="/AllBlogs">
          <span>Blogs</span>
        </a>
      </Menu.Item>

      <Menu.Item name="My Blogs">
        <a href="/MyBlogs">
          <span>My Blogs</span>
        </a>
      </Menu.Item>

      <Menu.Item name="Authors">
        <a href="/Authors">
          <span>Authors</span>
        </a>
      </Menu.Item>

      <Menu.Item name="BookMarks">
        <a href="/">
          <span>Bookmark</span>
        </a>
      </Menu.Item>

     
      
        

      <Menu.Menu position="right" id="Search" style={{width:"60rem",margin:"auto"}}>
        <Menu.Item>
          <Input
            placeholder="Search..."
            onChange={(e: any) => setQueryText(e.target.value as string)}
          />
          <Button icon="search" className="mr-2" onClick={searchQueryText} />
        </Menu.Item>
      </Menu.Menu>
      <div className="division-menu-icons">
          <Icon name="user" className="menu-icon" onClick={navigateProfile}>
          </Icon>
          <Icon name="log out" className="menu-icon" onClick={LogoutHandler}>
          </Icon>
        </div>
       
    </Menu>
  );
};

export default MainMenu;
