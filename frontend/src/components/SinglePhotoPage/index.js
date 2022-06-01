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
    const photo = useSelector(state => state.photos.entries[id]);
    // console.log(photo)

    useEffect(() => {
        dispatch(getOnePhoto(id));
        // dispatch(getComments(id));
    }, [dispatch, id])

    const navProfile = e => {
        e.preventDefault();
        history.push(`/profile/${photo.User?.id}`)
    }

    if (!sessionUser) {
        return (
            <Redirect to='/login' />
        )
    }

    if (!sessionUser || !photo) {
        return null;
    }

    return (
        <>
        <div className='photo-page-container'>
            <div className='single-photo-container'>
                <img src={photo.imageUrl} alt={photo.caption} />
            </div>
        </div>
            <div className='details-comments'>
                <div className='photo-details'>
                    {/* {sessionUser.id === photo.User?.id && <EditPhotoModal />} */}
                    <div className='user-follow'>
                        <a id='photographer' href={`/users/${photo.User?.id}`} onClick={navProfile}>@{photo.User?.username}</a>
                    </div>
                    <div className='caption'>
                        <p id='photo-caption'>{photo.caption}</p>
                        <p id='faves-text'># people faved this</p>
                    </div>
                    <hr/>
                </div>
                {/* <div className='tags-container'>Tags Coming Soon</div> */}
                {/* <Comments /> */}
            </div>
        </>
    )

}

export default SinglePhotoPage;
