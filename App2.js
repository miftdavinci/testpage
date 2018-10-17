import React, { Component } from 'react';
 
import SocialButton from './SocialButton'

export default class Map extends Component {
    render() {
        const handleSocialLogin = (user) => {
          console.log(user)
        }
         
        const handleSocialLoginFailure = (err) => {
          console.error(err)
        }
    
        return (
            <div>
                <SocialButton
                  provider='google'
                  appId='289793768454-rdkii22k4vg0fnhufei6k2mnif6ul925.apps.googleusercontent.com'
                  onLoginSuccess={handleSocialLogin}
                  onLoginFailure={handleSocialLoginFailure}
                >
                  Login with Facebook
                </SocialButton>
            </div>
        )
    }
}