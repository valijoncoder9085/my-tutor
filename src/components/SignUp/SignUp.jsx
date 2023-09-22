import {NavLink} from "react-router-dom";
import rocker from "../../assets/img/rocket.png"
import checkcircle from "../../assets/img/checkcircle.svg"
import warning from "../../assets/img/warning.svg"
import eyeOpen from "../../assets/img/eye-open.svg"

function SignUp() {
  return (<div>
    <main className="register">
      <div className=" register__content">

        <div className="register-left">
          <div className="register-imgWrapper">
            <img src={rocker} alt="rocket"/>
          </div>
        </div>

        <div className="register-right">

          <div className="register-formWrapper">
            <form action="#" className="form">
              <h2 className="register-title">Create your account</h2>
              <div className="form-group form-group--2">
                <div className="form-field form-field--">
                  <label htmlFor="fname">Full Name</label>
                  <div className="field-wrapper">
                    <input type="text" placeholder="First Name..." id="fname"/>
                    <span className="icon icon--success">
                                            <img src={checkcircle} alt="success-icon"/>
                                        </span>
                    <span className="icon icon--warning">
                                            <img src={warning} alt="warning-icon"/>
                                        </span>
                  </div>
                </div>
                <div className="form-field form-field--">
                  <div className="field-wrapper">
                    <input type="text" placeholder="Last Name..."/>
                    <span className="icon icon--success">
                                            <img src={checkcircle} alt="success-icon"/>
                                        </span>
                    <span className="icon icon--warning">
                                            <img src={warning} alt="warning-icon"/>
                                        </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-field form-field--">
                  <label htmlFor="username">Username</label>
                  <div className="field-wrapper">
                    <input type="text" placeholder="Username..." id="username"/>
                    <span className="icon icon--success">
                                            <img src={checkcircle} alt="success-icon"/>
                                        </span>
                    <span className="icon icon--warning">
                                            <img src={warning} alt="warning-icon"/>
                                        </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-field form-field--">
                  <label htmlFor="email">Email</label>
                  <div className="field-wrapper">
                    <input type="email" placeholder="Email address" id="email"/>
                    <span className="icon icon--success">
                                            <img src={checkcircle} alt="success-icon"/>
                                        </span>
                    <span className="icon icon--warning">
                                            <img src={warning} alt="warning-icon"/>
                                        </span>
                  </div>
                </div>
              </div>
              <div className="form-group form-group--2 my-0">
                <div className="form-field form-field--">
                  <label htmlFor="password">Password</label>
                  <div className="field-wrapper">
                    <input type="password" placeholder="Create Password" id="password"/>
                    <span className="icon icon--success">
                                            <img src={checkcircle} alt="success-icon"/>
                                        </span>
                    <span className="icon icon--warning">
                                            <img src={warning} alt="warning-icon"/>
                                        </span>
                    <span className="icon icon--eye" onClick="showPassword('password',this)">
                                            <img src={eyeOpen} alt="eye-icon"/>
                                        </span>
                  </div>
                </div>
                <div className="form-field form-field--">
                  <label htmlFor="confirmPass">Confirm Password</label>
                  <div className="field-wrapper">
                    <input type="password" placeholder="Confirm Password" id="confirmPass"/>
                    <span className="icon icon--success">
                                            <img src={checkcircle} alt="success-icon"/>
                                        </span>
                    <span className="icon icon--warning">
                                            <img src={warning} alt="warning-icon"/>
                                        </span>
                    <span className="icon icon--eye" onClick="showPassword('confirmPass',this)">
                                            <img src={eyeOpen} alt="eye-icon"/>
                                        </span>
                  </div>
                </div>
              </div>
              <div className="form-group  form-group--2 align-items-center my-4 py-2">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox"/>
                  <p className="form-check-label">
                    I Agree with all of your <NavLink to={"/"}>Terms & Conditions</NavLink>
                  </p>
                </div>
                <button className="button button--md button-i--r">
                  Create Account
                  <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.75 12H20.25" stroke="white"/>
                                            <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="white"/>
                                        </svg>
                                    </span>
                </button>
              </div>
              <div className="form-signup">
                <h6>Sign up with</h6>
                <div className="form-signup__wrapper">
                  <a className="social-medaia-box-btn google icon-common" href="#"> Google </a>
                  <a className="social-medaia-box-btn facebook icon-common" href="#"> Facebook </a>
                  <a className="social-medaia-box-btn apple icon-common" href="#"> Apple </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>);
}

export default SignUp;