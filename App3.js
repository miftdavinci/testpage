import React, { Component } from 'react';
 
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

export default class Map extends Component {
    render() {
        const responseGoogle = (response) => {
          console.log(response);
        }

        const logout = (response) => {
          console.log(response);
        }

        const componentClicked = (response) => {
          console.log(response);
        }

        const responseFacebook = (response) => {
          console.log(response);
        }
    
        return (
            <div>
              <GoogleLogin
                clientId="757803893129-rodqvkqhhmt9jnu5qtlofhag8e9jpak5.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              /><br/>
              <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={logout}
              >
              </GoogleLogout><br/>
              <FacebookLogin
                appId="322659981651318"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />
            </div>
        )
    }
}