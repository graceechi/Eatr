import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/photos';

import './explorepage.css';

function ExplorePage() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    let photos = useSelector(state => state.photos.entries);
    let photoArr = Object.values(photos);

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    if (!photos) {
        return null;
    }

    return (
        <>
        <h1>Hi from Explore Page</h1>
        <div className="body-container">
            <p>Explore</p>
            <div className="grid-container">
                {photoArr.map((photo) => {
                    return (
                        <div key={photo.id} className='photo-container'>
                            <a href={`/photos/${photo.id}`}
                                onClick={e => {
                                    e.preventDefault();
                                    history.push(`/photos/${photo.id}`)
                                }}>
                                <div className='photo-box'>
                                    <img className='photo' src={photo.imageUrl} alt={photo.caption} />
                                    {/* <div className='text-display'>
                                        <p id='photo-caption'>{photo.caption}</p>
                                        <p id='photo-user'>by {photo.User?.username}</p>
                                    </div> */}
                                </div>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    );
};

export default ExplorePage;
