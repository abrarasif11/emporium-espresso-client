import React, { useContext } from "react";
import { AuthContext } from "../../firebase/provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  
  const{signInUser} = useContext(AuthContext);

  const handleLogin = e =>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    signInUser(email, password)
    .then(result => {
      console.log(result.user)

      // update last login 

      const lastSignInTime = result?.user?.metadata?.lastSignInTime;
      const loginInfo = { email, lastSignInTime };

      fetch(`http://localhost:5000/user`, {
        method:'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      })
      .then(res => res.json())
      .then(data => {
        console.log('Login info', data)
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                  <p>
                    Already Have an Account <Link to='/register'><span className="text-blue-900">Register</span></Link>
                  </p>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
