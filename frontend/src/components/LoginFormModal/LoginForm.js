import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import './LoginForm.css';
import DemoButton from "../DemoButton";

function LoginFormContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  // if (sessionUser) return (
  //   <Redirect to="/explore" />
  // );
  if (sessionUser) history.push("/explore");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    // const user = {
    //   credential,
    //   password,
    // };

    // history.push('/explore');

    return dispatch(sessionActions.sessionLogin({ credential, password }))
    .catch(async (res) => {
      const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
    });
  }

  // const navSignup = e => {
  //   e.preventDefault();
  //   history.push('/signup');
  // }

  return (
    <div className="login-page-container">
        <div className="form-header">
            <div className="form-logo">
              {/* FIND LOGO */}
                <img src="" alt="logo" />
            </div>
        <div className="form-header-text">Log in to Flavr</div>
        </div>

        <form className="form-container" onSubmit={handleSubmit}>
        <ul className='errors-list'>
            {errors.map((error, idx) => <li className="error" key={idx}>{error}</li>)}
        </ul>

        <div className='input-container'>
            <input
                className="form-input"
                name="credential"
                type="text"
                value={credential}
                required
                placeholder="Username or Email Address"
                onChange={(e) => setCredential(e.target.value)}
            ></input>
        </div>

        <div className="input-container">
          <input
            className="form-input"
            name="password"
            type="password"
            value={password}
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button className="submitBtn" type="submit">Log In</button>

        {/* <div className='nav-sign-up'>
            <p>
              Not a Flavr member?
              <a href="/signup" onClick={navSignup}>  Sign up here.</a>
            </p>
          </div> */}
        <DemoButton />
        </form>
        <div className='line-skip'></div>
    </div>
  );
}

export default LoginFormContainer;
