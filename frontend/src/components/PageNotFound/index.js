import './pagenotfound.css'
import { NavLink } from 'react-router-dom';

function PageNotFound() {
    return (
        <div className='page-not-found'>
            <img id='food-icon' src='/photos/blue-food-icon.png' alt='food-icon'/>
            <p id='page-not-found-title'>
                Oops, page not found!
            </p>
            <p id='page-not-found-text'>
                Go back to
                <span id='back-to-home'><NavLink exact to='/'> Flavr </NavLink></span>
                Home Page!
            </p>
        </div>
    );
}

export default PageNotFound;
