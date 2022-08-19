import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { editComment } from '../../store/comments';
import { Modal } from "../../context/Modal";
import "./editcomment.css";

const EditCommentModal = ({ comment, image }) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [text, setText] = useState(comment.comment);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (text && text.length >= 200) {
            setErrors(["Comments should be less than 200 characters."])
        } else if (!text && text.length === 0) {
            setErrors(["Comments should be at least 1 character."])
        }
        else if (text.trim().length === 0) {
            setErrors(["Comments should not be an empty entry."])
        }
        else {
            setErrors([])
        }
    }, [text])

    const handleEdit = async (e) => {
        e.preventDefault();

        if (text.length === 0) {
            setShowModal(true);
            setText(text);
        } else if (text.trim().length === 0) {
            setShowModal(true);
            setText(text);
        } else if (text.length > 250) {
            setShowModal(true);
        } else {
            const payload = {
                // userId: sessionUser.id,
                // photoId: comment.photoId,
                commentId: comment.id,
                comment: text,
            }
            dispatch(editComment(payload));
            setShowModal(false);
            setText(text);
        }
    }

    const handleCancel = async e => {
        e.preventDefault();

        setShowModal(false);
        setText(comment.comment);
    }

    return (
        <>
        <button onClick={() => setShowModal(true)} id='edit-comment-modal-btn'>
            <i className="fa-solid fa-pen-to-square"></i>
        </button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <form onSubmit={handleEdit}>
                    <div className="edit-comment-modal">
                    <div>
                        {errors.map((error, ind) => (
                            <div className='edit-comment-error-messages' key={ind}>{error}</div>
                        ))}
                    </div>
                        <div className="input-container">
                            <textarea
                                className="edit-form-input"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                        <button className="edit-comment-submit-btn" >Save</button>
                        <button className="cancel-edit-button" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </Modal>
        )}
        </>
    );
};

export default EditCommentModal;
