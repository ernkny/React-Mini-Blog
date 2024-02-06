import MainMenu from "../modules/MainMenu";
import Footer from "../modules/Footer";
import { Outlet } from "react-router";
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
