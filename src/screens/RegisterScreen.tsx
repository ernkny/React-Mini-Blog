import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import "../styles/FormScreen.css";
import { useNavigate } from "react-router";
import { RegisterRequest } from "../Apis/services/auth/models";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterMutation,useGetAllUsersFromAuthQuery } from "../Apis/services/auth/authApi";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



const RegisterScreen = () => {
    const { data: users, error, isLoading} = useGetAllUsersFromAuthQuery();
    const [registerUser,{}]=useRegisterMutation();
    const [errorMessage, setErrorMessage] = useState("")
    const AlertSwal = withReactContent(Swal);
    const navigate=useNavigate();

    const ShowSuccessAlert = () => {
      AlertSwal.fire({
        title: <p>User Created</p>,
        text: 'Login with your new profile.',
        icon: 'success',
        timer: 3000,
      });
    };

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<RegisterRequest>();
    const onSubmit: SubmitHandler<RegisterRequest> = async (data) => {
      try {
        if(!isLoading && !error && users){
          let validateUser=await users.find(user=>user.Email===data.Email && user.Username===data.Username);
          if(validateUser===undefined){
            let token=generateSecureToken(16)
            data.accessToken=token;
            data.refreshToken=token;
            data.accessTokenExpireDate=1709659154.088007;
            data.refreshTokenExpireDate=1709659154.088007;
            registerUser(data)
            .unwrap()
            .then((res)=>{
              ShowSuccessAlert()
              navigate("/login")
            });
          }
          else
          {
            setErrorMessage("Email or Username exist.")
          }
        }
      } 
      catch (error) {
       
        
      }
    };

    function generateSecureToken(length:number) {
      const array = new Uint8Array(length);
      window.crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }
    useEffect(() => {
     
    }, [errorMessage,users])
    
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
              <div className="content header-login-register" id="Error">
                {errorMessage}
              </div>
            </div>
            <div className="ui fluid card">
              <div className="content">
                <form className="ui form" method="POST"  onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label>Email</label>
                    <input type="email" placeholder="Email" 
                    {...register("Email", { required: true })}
                    />
                    {errors.Email && <p>This field is required</p>}
                  </div>
                  <div className="field">
                    <label>Username</label>
                    <input type="text"  placeholder="username" 
                    {...register("Username", { required: true })}
                    />
                    {errors.Username && <p>This field is required</p>}
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <input type="password" placeholder="Password" 
                      {...register("Password", { required: true })}
                    />
                     {errors.Password && <p>This field is required</p>}
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
