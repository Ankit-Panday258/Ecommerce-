import React from "react";
import'./CSS/Lognsinup.css'

const LognSinup = () => {
    return(
        <div className="loginsinup">
            <div className="loginsinup-contariner">
                <h1>Sign Up</h1>
                <div className="loginsinup-fields">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already  have an  account? <span>login here</span></p>
                <div className="loginsingup-agree">
                    <input type="checkbox" name=""/>
                    <p>By Continuing, i agree to  the  terms of  use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}
export default LognSinup  ;