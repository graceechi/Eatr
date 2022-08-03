import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateUserPhoto } from '../../store/photos';
// import { Modal } from '../../context/Modal';
import "./editphotomodal.css";

function EditPhotoContainer( { setShowModal } ) {
    // const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const {id} = useParams();

    const history = useHistory();
    const photo = useSelector(state => state.photos.entries[id])

    const [caption, setCaption] = useState(photo.caption);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (caption && caption.length >= 250) {
            setErrors(["Caption should be less than 250 characters."])
        } else if (!caption && caption.length === 0) {
            setErrors(["Caption should be at least 1 character."])
        } else if (caption.trim().length === 0) {
            setErrors(["Caption should not be an empty entry."])
        } else {
            setErrors([])
        }
    }, [caption])

    const handleSubmit = async e => {
        e.preventDefault();

        if (caption.length === 0) {
            setShowModal(true);
            setCaption(photo.caption);
        } else if (caption.trim().length === 0) {
            setShowModal(true);
            setCaption(photo.caption);
        } else if (caption.length > 250) {
            setShowModal(true);
            // setCaption(photo.caption);
        } else {
            const updatePhoto = {
                caption, id
            }
            dispatch(updateUserPhoto(updatePhoto))
            setShowModal(false);
            setCaption(caption);
            history.push(`/photos/${photo.id}`)
        }
    }

    const handleCancel = async e => {
        e.preventDefault();

        setShowModal(false);
        setCaption(photo.caption);
    }


    return (
        <div className='edit-photo-modal'>

            <div className='edit-form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='form-header-title'>Edit Caption</div>
                    <div>
                        {errors.map((error, ind) => (
                            <div className='edit-photo-error-messages' key={ind}>{error}</div>
                        ))}
                    </div>
                    <textarea className='textarea-container' type='text' value={caption} placeholder='Caption' onChange={e => setCaption(e.target.value)} />
                    <button className='save-btn' type='submit'>Save</button>
                    <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
                </form>
            </div>

        </div>
    );
}


export default EditPhotoContainer;
