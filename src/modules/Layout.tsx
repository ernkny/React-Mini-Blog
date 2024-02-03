import MainMenu from "../modules/MainMenu";
import Footer from "../modules/Footer";
import { Outlet } from "react-router";
import { Container } from "semantic-ui-react";
import "../styles/MyBlogsScreen.css";

const Layout = () => {
  return (
    <>
      <MainMenu />
      <Container>
        <main  className="App">
          <Outlet />
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
