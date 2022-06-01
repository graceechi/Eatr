import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { getOnePhoto } from '../../store/photos';
import './singlephotopage.css';

const SinglePhotoPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const photo = useSelector(state => state.photos[id]);

    useEffect(() => {
        dispatch(getOnePhoto(id));
        // dispatch(getComments(id));
    }, [dispatch, id])

    // const navProfile = e => {
    //     e.preventDefault();
    //     history.push(`/profile/${photo.User?.id}`)
    // }

    if (!sessionUser) {
        return (
            <Redirect to='/login' />
        )
    }

    if (!sessionUser || !photo) {
        return null;
    }

    return (
        <div className='photo-page-container'>
            <div className='single-photo-container'>
                <img src={photo.imageUrl} alt={photo.caption} />
            </div>
            <div className='caption'>
                <p id='photo-caption'>{photo.caption}</p>
            </div>
        </div>
    )

}

export default SinglePhotoPage;
