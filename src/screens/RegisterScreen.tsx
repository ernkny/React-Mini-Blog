import React from "react";
import { Button } from "semantic-ui-react";
import "../styles/FormScreen.css";
import { useNavigate } from "react-router";

const RegisterScreen = () => {
    const navigate=useNavigate();

    const navigateToLoginPage=()=>{
        navigate("/login")
    }
  return (
    <>
      <h1>Register</h1>
      <div className="page-login">
        <div className="ui centered grid container">
          <div className="nine wide column">
            <div className="ui icon warning message">
              <i className="lock icon" />
              <div className="content" id="Error"></div>
            </div>
            <div className="ui fluid card">
              <div className="content">
                <form className="ui form" method="POST">
                  <div className="field">
                    <label>User</label>
                    <input type="text" name="user" placeholder="User" />
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <input type="password" name="pass" placeholder="Password" />
                  </div>
                  <Button
                    className=" labeled icon  button-default btn-detail"
                    type="submit"
                  >
                    <i className="registered alternate icon" />
                    Register
                  </Button>
                  <Button
                    className=" labeled icon  button-default btn-detail"
                    style={{float:"right"}}
                    type="button"
                    onClick={navigateToLoginPage}
                  >
                    <i className=" unlock alternate icon" />
                    Login
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterScreen;
