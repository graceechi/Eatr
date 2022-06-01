import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { updateUserPhoto } from '../../store/photos';
// import { Modal } from '../../context/Modal';
import "./editphotomodal.css";

function EditPhotoContainer() {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const {id} = useParams();

    const history = useHistory();
    const photo = useSelector(state => state.photos.entries[id])
    // console.log(photo)

    const [caption, setCaption] = useState(photo.caption || '');

    const handleSubmit = async e => {
        e.preventDefault();
        const updatePhoto = {
          photo,
          caption
        }
        dispatch(updateUserPhoto(updatePhoto))
        setShowModal(false);
        history.push(`/photos/${photo.id}`)
    }

    // const handleDelete = async e => {
    //     e.preventDefault();
    //     dispatch(deleteUserPhoto(photo.id))
    //     history.push(`/users/${photo.User.id}`);
    // }

    return (
        <div className='edit-photo-modal'>
            {/* {showModal && ( */}
                {/* // <Modal onClose={() => setShowModal(false)}> */}
                    <div className='form-container'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-header-text'>Edit Photo</div>
                            <textarea className='input-container' type='text' value={caption} placeholder='Caption' onChange={e => setCaption(e.target.value)} />
                            <button className='save-btn' type='submit'>Save</button>
                            {/* <button className='cancel-btn' onClick={() => setShowModal(false)}>Cancel</button> */}
                        </form>
                    </div>
                {/* // </Modal> */}

            {/* // )} */}
        </div>
    );
}


export default EditPhotoContainer;
