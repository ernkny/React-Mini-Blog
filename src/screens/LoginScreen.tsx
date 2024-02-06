import { Button } from "semantic-ui-react";
import "../styles/FormScreen.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginRequest } from "../Apis/services/auth/models";
import { setUserName,setUserProfile } from "../store/Actions/authActions";
import { useGetAllUsersFromAuthQuery, useLoginMutation } from "../Apis/services/auth/authApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const LoginScreen = () => {
  const [login, {}] = useLoginMutation();
  const { data: users } = useGetAllUsersFromAuthQuery();
  const navigate = useNavigate();
  const [messages, setMessages] = useState({
    serverError: false,
    emptyUserName: false,
    emptyPassword: false,
    invalidPasswordOrUserName: false,
    message: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();
  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    try {
      console.log(users)
      if (users) {
        let filteredUser = users.find(
          (user) =>
            user.Password === data.password && user.Username === data.username
        );
        console.log(filteredUser)
        if (filteredUser) {
          let loginUser: LoginRequest = {
            username: filteredUser.Username,
            password: filteredUser.Password,
          };
          login(loginUser)
            .unwrap()
            .then((userProfile) => {
              if (userProfile) {
                setUserName(loginUser.username);
                setUserProfile(userProfile)
                navigate("/", { replace: true });
              }
            });
        } else {
          setMessages({
            ...messages,
            invalidPasswordOrUserName: true,
            message: "Invalid username or password",
          });
        }
      }
    } catch (error) {
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

  useEffect(() => {}, [messages,users]);

  const navigateToRegisterPage = () => {
    navigate("/Register");
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
                <div className="header header-login-register">{messages.message}</div>
              </div>
            </div>
            <div className="ui fluid card">
              <div className="content">
                <form
                  className="ui form"
                  method="POST"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="field">
                    <label>User</label>
                    <input
                      placeholder="Username"
                      {...register("username", { required: true })}
                    />
                    {errors.username && <p>This field is required</p>}
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <input
                    type="password"
                      placeholder="password"
                      {...register("password", { required: true })}
                    />
                    {errors.password && <p>This field is required</p>}
                  </div>
                  <Button
                    className=" labeled icon  button-default btn-detail"
                    type="submit"
                  >
                    <i className="unlock alternate icon" />
                    Login
                  </Button>
                  <Button
                    className=" labeled icon  button-default btn-detail"
                    style={{ float: "right" }}
                    type="button"
                    onClick={navigateToRegisterPage}
                  >
                    <i className="registered alternate icon" />
                    Register
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

export default LoginScreen;
