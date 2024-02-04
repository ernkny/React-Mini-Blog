import { Button } from 'semantic-ui-react'
import '../styles/FormScreen.css'
import { useForm, SubmitHandler } from "react-hook-form"
import { LoginRequest } from '../Apis/services/auth/models'
import { setUserName } from "../store/Actions/authActions";
import { useLoginMutation } from '../Apis/services/auth/authApi'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const LoginScreen = () => {
  const [login, {}] = useLoginMutation();
  const navigate = useNavigate();
  const [messages, setMessages] = useState({
    serverError: false,
    emptyUserName: false,
    emptyPassword: false,
    invalidPasswordOrUserName: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>()
  const onSubmit: SubmitHandler<LoginRequest> = async (data) =>{
    try {
      login(data)
        .unwrap()
        .then(() => {
          setUserName(data.username);
          navigate("/", { replace: true });
        })
    } 
    catch (error) {
      switch (error) {
        case 400:
          setMessages({ ...messages, invalidPasswordOrUserName: true });
          break;
  
        default:
          setMessages({ ...messages, serverError: true });
          break;
      }
    } 
};
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
                <form className="ui form" method="POST" onSubmit={handleSubmit(onSubmit)}>
                  <div className="field">
                    <label>User</label>
                    <input placeholder='Username'  {...register("username", { required: true })}/>
                     {errors.username && <p>This field is required</p>}
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <input placeholder='password'  {...register("password", { required: true })}/>
                     {errors.password && <p>This field is required</p>}
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