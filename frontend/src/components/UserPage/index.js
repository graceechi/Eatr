import React, { useEffect } from 'react';
import { Redirect, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPhotos } from '../../store/photos';
import './userpage.css';

function UserPage() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const userPhotos = useSelector(state => state.photos.entries)

    const userPhotoArr = Object.values(userPhotos);
    // const user = Object.values(userPhotoArr)[0]?.User;

    useEffect(() => {
        dispatch(getUserPhotos(id));
    }, [dispatch, id]);

    // const navPhotostream = e => {
    //     e.preventDefault();
    //     history.push(`/users/${id}`);
    // }

    // const navFaves = e => {
    //     e.preventDefault();
    //     history.push(`/users/${id}/faves`)
    // }

    if (!sessionUser) {
        return (
            <Redirect to='/login' />
        )
    }

    return (
        <div className='user-photostream'>
            <div className='user-info-container'>
                <div id='user-name-text'>
                    <p>@{sessionUser.username}</p>
                </div>
                <div id='user-email'>
                    <p>{sessionUser.email}</p>
                </div>
            </div>
            <div className='toggle-nav'>
                {/* <a href={`/users/${id}`} onClick={navPhotostream}>Photostream</a> */}
                <span>Photostream</span>
                {/* <a href={`/users/${id}/faves`} onClick={navFaves}>Faves</a> */}
            </div>
            <div className='grid-container'>
                {userPhotoArr.map(photo => {
                    return (
                        <div key={photo.id} className='user-photo-container'>
                            <a href={`/photos/${photo.id}`} onClick={e => { e.preventDefault(); history.push(`/photos/${photo.id}`)}}>
                                <div className='photo-box'>
                                    <img className='photo' src={photo.imageUrl} alt={photo.caption} />
                                    {/* <div className='text-display'>
                                        <p id='explore-photo-caption'>{photo.caption}</p>
                                    </div> */}
                                </div>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserPage;
