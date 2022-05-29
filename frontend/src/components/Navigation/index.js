import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
// import UploadFormModal from "../UploadPage";
import "./Navigation.css";
import ProfileButton from "./ProfileButton";

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    let leftNavLinks;
    let sessionLinks;
    if (sessionUser) {
        leftNavLinks = (
        <>
            <NavLink to={`/users/${sessionUser.id}`}>You</NavLink>
            <NavLink exact to="/">Explore</NavLink>
            <NavLink to={`/faves`}>Faves</NavLink>
        </>
        );
        sessionLinks = (
            <>
                {/* <UploadFormModal /> */}
                <ProfileButton />
            </>
        );
    } else {
        sessionLinks = (
            <>
              <LoginFormModal />
              <SignUpFormModal />
            </>
          );
    }

    return (
        <nav className="nav-bar">
        <div className="nav-left">
            <NavLink exact to="/">
            {/* FIND IMAGE LOGO FOR FLAVR */}
            <img
                src=""
                className="nav-logo"
                alt="logo"
            ></img>
            </NavLink>
            {isLoaded && leftNavLinks}
        </div>
        <div className="nav-right">{isLoaded && sessionLinks}</div>
    </nav>
    )
}

export default Navigation;
