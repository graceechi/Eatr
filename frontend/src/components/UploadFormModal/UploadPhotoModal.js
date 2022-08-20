import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from 'react-router-dom';
import { Modal } from '../../context/Modal';
// import { uploadPhoto } from '../../store/photos';
import { uploadPhotoAws } from '../../store/photos';

import './UploadForm.css';


function UploadPhotoModal({ user }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const [caption, setCaption] = useState('');
    const [photo, setPhoto] = useState(null);
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false);


    useEffect(() => {
        if (caption && caption.length >= 250) {
            setErrors(["Caption should be less than 250 characters."])
        } else if (!caption && caption.length === 0) {
            setErrors(["Please enter a caption."])
        } else if (caption.trim().length === 0) {
            setErrors(["Caption should not be an empty entry."])
        } else if (photo === null) {
            setErrors(["Please upload a photo."])
        } else {
            setErrors([])
        }
    }, [caption, photo])

    const handleSubmit = async e => {
        e.preventDefault();

        if (caption.length >= 250) {
            setShowErrors(true)
        } else if (caption.length === 0) {
            setShowErrors(true)
        } else if (photo === null) {
            setShowErrors(true)
        } else if (photo && caption.length > 0 && caption.length <= 250) {
            const uploadedPhoto = {
                caption,
                photo,
                userId: sessionUser.id
            }

            const newPhoto = await dispatch(uploadPhotoAws(uploadedPhoto));

            setShowModal(false);
            setCaption('');
            setPhoto(null);
            setShowErrors(false);
            history.push(`/photos/${newPhoto.id}`)
        }
    }

    const uploadFile = (e) => {
        const file = e.target.files[0];
        if (file) setPhoto(file);
    };

    const handleCancel = async e => {
        e.preventDefault();

        setShowModal(false);
        setPhoto(null);
        setCaption('');
        setShowErrors(false);
    }

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
                <ul className="upload-errors-container">
                    {showErrors ? errors.map((error, ind) => (
                        <div className='upload-caption-error-messages' key={ind}>{error}</div>
                    ))
                :
                null
                }
                </ul>
                <div className='input-container'>
                    <input type="text" value={caption} className="form-input" placeholder='Caption' onChange={e => setCaption(e.target.value)} required />
                </div>
                <div className="input-container">
                    <label className='aws-input'>
                        {photo ? `${photo.name}` : "Upload Photo"}
                        <input
                            className="form-input file-input"
                            type="file"
                            onChange={uploadFile}
                            hidden={true}
                        />
                    </label>
                </div>

                <button id='submitBtn' type='submit'>Submit</button>
                <button type='button' id='cancelBtn' onClick={handleCancel}>Cancel</button>
                <div className='line-skip'></div>

            </form>
            </Modal>
        )}
        </div>
    );
}

export default UploadPhotoModal;
