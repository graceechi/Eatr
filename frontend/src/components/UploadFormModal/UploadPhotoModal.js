import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from 'react-router-dom';
import { Modal } from '../../context/Modal';
import { uploadPhoto } from '../../store/photos';

import './UploadForm.css';


function UploadPhotoModal({ user }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const [caption, setCaption] = useState('');
    const [photo, setPhoto] = useState(null);
    // const [imgURL, setImgURL] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const uploadedPhoto = {
        caption,
        // imgURL,
        photo,
        userId: sessionUser.id
        }
        const newPhoto = await dispatch(uploadPhoto(uploadedPhoto))
        setShowModal(false);
        setCaption('');
        // setImgURL('');
        setPhoto(null);
        history.push(`/photos/${newPhoto.id}`)
    }

    const uploadFile = (e) => {
        const file = e.target.files[0];
        if (file) setPhoto(file);
    };

    return (
        <div className='modal'>
        <button onClick={() => setShowModal(true)} id='upload-btn'>
            <i className="fas fa-cloud-upload-alt"></i>
        </button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
            <form className='upload-form-container' onSubmit={handleSubmit}>
                <div className='line-skip'></div>
                <div className="form-header-text">Upload Photo</div>
                <div className='line-skip'></div>
                <div className='input-container'>
                    <input type="text" value={caption} className="form-input" placeholder='Caption' onChange={e => setCaption(e.target.value)} />
                </div>
                <div className="input-container">
                    <input
                        className="form-input file-input"
                        type="file"
                        onChange={uploadFile}
                    />
                </div>
                {/* <div className='input-container'>
                    <input type="text" value={imgURL} className="form-input" placeholder='Image URL' onChange={e => setImgURL(e.target.value)} required />
                </div> */}
                <button id='submitBtn' type='submit'>Submit</button>
                <button type='button' id='cancelBtn' onClick={() => setShowModal(false)}>Cancel</button>
                <div className='line-skip'></div>
                {/* <div className='line-skip'></div> */}
            </form>
            </Modal>
        )}
        </div>
    );
}

export default UploadPhotoModal;
