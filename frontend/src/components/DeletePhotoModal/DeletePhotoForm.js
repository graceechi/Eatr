import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteUserPhoto } from '../../store/photos';
import './deletephoto.css';

function DeletePhotoContainer() {
    // const sessionUser = useSelector(state => state.session.user);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const {id} = useParams();

    const history = useHistory();
    const photo = useSelector(state => state.photos.entries[id])
    // console.log(photo)

    const handleDelete = async e => {
        e.preventDefault();
        dispatch(deleteUserPhoto(photo.id))
        setShowModal(false);
        history.push(`/users/${photo.User.id}`)
    }

    return (
        <div className="delete-container">
            <div className="delete-form-header">Are you sure you want to delete your photo?</div>

            <button className="delete-submit-button" onClick={handleDelete}>Delete</button>
            <button className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
        </div>
    );

}

export default DeletePhotoContainer;
