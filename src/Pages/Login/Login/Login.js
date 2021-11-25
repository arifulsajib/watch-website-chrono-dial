import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import loginBanner from "../../../Images/Banner/login-banner.png";
import logo from "../../../Images/logo.png";

const Login = () => {
  const { signInWithGoogle, error, success, processLogin, saveToMongo, signInWithGithub, setUser, setError, setSuccess, setIsLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/dashboard";

  // google sign in handle
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        saveToMongo(result.user.email, result.user.displayName);
        setError("");
        setSuccess("Login Success");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // email sign in handle
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        setUser(result.user);
        saveToMongo(result.user.email, result.user.displayName);
        setError("");
        setSuccess("Login Success");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // handle Email pass Sign in
  const handleEmailSignIn = () => {
    if (!email || !password) {
      setError("Must fill up the field");
      return;
    }
    processLogin(email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
        setSuccess("Login Success");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none bg-dark d-md-flex align-items-center justify-content-center shadow-lg">
                  <img src={loginBanner} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black shadow-lg">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="d-flex justify-content-center mb-3 pb-1">
                        <img src={logo} alt="" />
                      </div>

                      <h5 className="fw-normal mb-3 pb-3">Sign into your account</h5>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                        <input onBlur={(e) => setEmail(e.target.value)} type="email" id="form2Example17" className="form-control form-control-lg" />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                        <input onBlur={(e) => setPassword(e.target.value)} type="password" id="form2Example27" className="form-control form-control-lg" />
                      </div>

                      <div className="text-danger mb-3">{error}</div>
                      <div className="text-success mb-3">{success}</div>

                      <div className="pt-1 mb-4">
                        <button onClick={handleEmailSignIn} className="btn btn-dark btn-lg btn-block" type="button">
                          Login
                        </button>
                      </div>
                      <h6 className="text-center">Or Login with</h6>
                      <div className="row row-cols-2 g-3 mt-2">
                        <div className="col">
                          <button onClick={handleGoogleSignIn} type="button" className="btn btn-dark btn-lg btn-block container-fluid">
                            <i className="fab fa-google text-white"></i>
                          </button>
                        </div>
                        <div className="col">
                          <button onClick={handleGithubSignIn} type="button" className="btn btn-dark btn-lg btn-block container-fluid">
                            <i className="fab fa-github text-white"></i>
                          </button>
                        </div>
                      </div>
                      <div className="mt-4">
                        New user?{" "}
                        <Link to="/register" className="text-dark text-decoration-none fw-bold">
                          Register Here
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
