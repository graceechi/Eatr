import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
// import UploadForm from "../UploadFormModal";
import "./Navigation.css";
import ProfileButton from "./ProfileButton";
import UploadPhotoModal from "../UploadFormModal/UploadPhotoModal";

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    let leftNavLinks;
    let sessionLinks;
    if (sessionUser) {
        leftNavLinks = (
        <>
            <NavLink to={`/users/${sessionUser.id}`}>You</NavLink>
            <NavLink exact to="/explore">Explore</NavLink>
            {/* <NavLink to={`/faves`}>Faves</NavLink> */}
        </>
        );
        sessionLinks = (
            <>
                <div id='upload-btn-container'>
                    <UploadPhotoModal user={sessionUser}/>
                </div>
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
            {/* <img
                src=""
                className="nav-logo"
                alt="logo"
            ></img> */}
                <h1>Flavr</h1>
            </NavLink>
            {isLoaded && leftNavLinks}
        </div>
        <div className="nav-right">{isLoaded && sessionLinks}</div>
    </nav>
    )
}

export default Navigation;
