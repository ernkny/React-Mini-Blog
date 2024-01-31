import { Button } from 'semantic-ui-react'
import '../styles/FormScreen.css'

const LoginScreen = () => {
  return (
    <>

        <h1>Login</h1>
        <div className="page-login">
        <div className="ui centered grid container">
          <div className="nine wide column">
            <div className="ui icon warning message">
              <i className="lock icon" />
              <div className="content">
                <div className="header">
                  
                </div>
              </div>
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
                  <Button className=" labeled icon  button-default btn-detail" type="submit">
                    <i className="unlock alternate icon" />
                    Login
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

  </>
  )
}

export default LoginScreen