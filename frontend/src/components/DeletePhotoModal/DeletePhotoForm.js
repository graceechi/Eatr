import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteUserPhoto } from '../../store/photos';
import './deletephoto.css';
// import { Modal } from '../../context/Modal';

function DeletePhotoContainer( { setShowModal }) {
    // const sessionUser = useSelector(state => state.session.user);
    // const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const {id} = useParams();

    const history = useHistory();
    const photo = useSelector(state => state.photos.entries[id])

    const handleDelete = async e => {
        e.preventDefault();
        dispatch(deleteUserPhoto(photo.id))
        setShowModal(false);
        history.push(`/users/${photo.User.id}`)
    }

    return (
        <>
        {/* <button onClick={() => setShowModal(true)} id='delete-photo-btn'>
            <i className="fa-solid fa-trash-can"></i>
        </button> */}
        <div className="delete-container">
        {/* {showModal && (
            <Modal onClose={() => setShowModal(false)}> */}
                <div className="delete-form-header">Are you sure you want to delete your photo?</div>

                <button className="delete-submit-button" onClick={handleDelete}>Delete</button>
                <button className="cancel-button" onClick={() => setShowModal(false)}>Cancel</button>
            {/* </Modal>
        )} */}
        </div>
        </>
    );

}

export default DeletePhotoContainer;
