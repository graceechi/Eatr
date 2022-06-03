import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteComment } from '../../store/comments';
import { Modal } from "../../context/Modal";
import "./deletecomment.css";

const DeleteCommentModal = ({ comment, image }) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = async e => {
        e.preventDefault();
        dispatch(deleteComment(comment.id));
        setShowModal(false);
    }

    return (
        <>
        <button onClick={() => setShowModal(true)} id='remove-comment-btn'>
            <i className="fa-solid fa-trash-can"></i>
        </button>
        {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <div className="delete-comment-modal">
                    <div className="delete-comment-header">Are you sure you want to delete your comment?</div>

                    <button className="delete-comment-button" onClick={handleDelete}>Delete</button>
                    <button className="cancel-comment-button" onClick={() => setShowModal(false)}>Cancel</button>
                </div>
            </Modal>
        )}
        </>
    );
};

export default DeleteCommentModal;
