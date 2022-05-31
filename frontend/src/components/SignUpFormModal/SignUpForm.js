import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import '../LoginFormModal/LoginForm.css'
import DemoButton from "../DemoButton";

function SignUpFormContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/explore" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    if (password === confirmPassword) {
      const user = {
        username,
        email,
        password,
      };
      return dispatch(sessionActions.signUpUser({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };
  history.push('/explore');

  return (
    <div className="login-page-container">
        <div className="form-header">
            <div className="form-logo">
              {/* FIND LOGO */}
                <img src="" alt="logo" />
            </div>
        <div className="form-header-text">Sign up for Flavr</div>
        </div>

    <form className='form-container' onSubmit={handleSubmit}>
        <ul className="errors-list">
            {errors.map((error, idx) => <li className='error' key={idx}>{error}</li>)}
        </ul>

        <div className='input-container'>
            <input
                className="form-input"
                name="username"
                type="text"
                value={username}
                placeholder="Enter a username"
                onChange={(e) => setUsername(e.target.value)}
            ></input>
        </div>

        <div className="input-container">
            <input
                className="form-input"
                name="email"
                type="text"
                value={email}
                placeholder="Enter an email"
                onChange={(e) => setEmail(e.target.value)}
            ></input>
        </div>

        <div className="input-container">
            <input
                className="form-input"
                name="password"
                type="password"
                value={password}
                placeholder="Enter a password"
                onChange={(e) => setPassword(e.target.value)}
            ></input>
        </div>

        <div className="input-container">
            <input
                className="form-input"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
        </div>

        <button className='submitBtn' type="submit">Sign Up</button>
      </form>
      <DemoButton />
      <div className='line-skip'></div>
    </div>
  );
}

export default SignUpFormContainer;
