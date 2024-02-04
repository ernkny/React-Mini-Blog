import MainMenu from "../modules/MainMenu";
import Footer from "../modules/Footer";
import { Outlet } from "react-router";
import { Container } from "semantic-ui-react";
import "../styles/MyBlogsScreen.css";

const Layout = () => {
  return (
    <>
      <MainMenu />
        <main  className="App">
          <Outlet />
        </main>
      <Footer />
    </>
  );
};

export default Layout;
