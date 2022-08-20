import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, NavLink, useHistory } from 'react-router-dom';
import { loadComments, createComment } from '../../store/comments';
import { loadUsers } from '../../store/user';
import DeleteCommentModal from '../DeleteCommentModal/DeleteComment';
import EditCommentModal from '../EditCommentModal/EditComment';
import './singlephotopage.css';

const Comments = () => {
    const sessionUser = useSelector(state => state.session.user);
    // const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();
    const users = useSelector(state => state?.user?.entries);
    // console.log('THIS IS ALL THE USERS', users)

    const [newComment, setNewComment] = useState('');
    const [errors, setErrors] = useState([]);
    const [showErrors, setShowErrors] = useState(false);

    // getting/filtering comments from DB
    const comments = useSelector(state => state.comments.entries); // object of arrays

    let allComments = Object.values(comments);

    useEffect(() => {
        dispatch(loadComments(id));
        dispatch(loadUsers());
    }, [dispatch, id]);

    useEffect(() => {
        if (newComment && newComment.length >= 250) {
            setErrors(["Comments should be less than 250 characters."])
        } else if (newComment.length === 0) {
            setErrors(["Comments should be at least 1 character and no empty entries."])
        } else {
            setErrors([])
        }
    }, [newComment])

    const addComment = async e => {
        e.preventDefault();

        if (newComment.length === 0) {
            setNewComment('');
            setShowErrors(true);
        } else if (newComment.trim().length === 0) {
            setNewComment('');
            setShowErrors(true);
        } else if (newComment.length > 250) {
            setNewComment('');
            setShowErrors(true);
        } else {
            const comment = {
                userId: sessionUser.id,
                photoId: id,
                comment: newComment
            }
            dispatch(createComment(comment));
            setNewComment('');
            setShowErrors(false);
        }
    }

    return (
        <div className="comments-container">
            {allComments && allComments.map((comment) => (
                <div className="comment" key={`${comment.id}`}>
                    <div className="comment-details">
                        {/* <NavLink id='comment-username'
                        to={`/users/${comment.userId}`}
                        >{`@${comment.User.username}`}</NavLink> */}
                        {/* {`@${comment.User.username}`} */}
                        <p id='comment-text'>
                            {/* {`@${comment.User.username}`} */}
                            {`@${users[comment.userId]?.username}`}
                            <span id='comment-text-span'> {comment.comment} </span>
                            {comment?.User?.id === sessionUser?.id ? (
                                    <>
                                        <EditCommentModal comment={comment} />
                                        <DeleteCommentModal comment={comment} />
                                    </>
                            ) : (
                                ""
                            )}
                        </p>
                    </div>
                </div>
            ))}
            {/* <hr id='create-comment-hr' /> */}
            {/* insert add comment textbox */}
            <div className='create-comment-container'>
                <div>
                    {showErrors ? errors.map((error, ind) => (
                        <div className='create-comment-error-messages' key={ind}>{error}</div>
                    ))
                    :
                    null
                    }
                </div>
                <form onSubmit={addComment}>
                    <textarea className='create-comment-box' value={newComment} onChange={e => setNewComment(e.target.value)} placeholder=" Leave a comment!" required ></textarea>
                    <button id='create-comment-btn'>Comment</button>
                </form>
            </div>
        </div>
    );

}

export default Comments;
