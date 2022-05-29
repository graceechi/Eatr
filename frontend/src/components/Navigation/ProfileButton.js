import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import './Navigation.css';

const ProfileButton = ({ user }) => {
const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    const closeMenu = () => {
      if (!showMenu) return;
      setShowMenu(false);
    };
    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const profile = e => {
    e.preventDefault();
    history.push(`/profile/${sessionUser.id}`);
  }

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.sessionLogout());
    history.push('/');
  };

  return (
    <>
      <button class="profile-btn" onClick={openMenu}>
        <i className="fas fa-user-alt"></i>
      </button>
      {showMenu && (
        <div className="profile-dropdown">
            {/* <a href={`/profile/${sessionUser.id}`} onClick={profile} id='profile-dropdown'>Profile</a> */}
            <a href='/' onClick={logout} id='logout-dropdown'>Log Out</a>
          {/* <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li> */}
        </div>
      )}
    </>
  );
};

export default ProfileButton;
