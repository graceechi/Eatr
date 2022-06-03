import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, NavLink, useHistory } from 'react-router-dom';
import { loadComments, createComment } from '../../store/comments';
import DeleteCommentModal from '../DeleteCommentModal/DeleteComment';
import './singlephotopage.css';

const Comments = () => {
    const sessionUser = useSelector(state => state.session.user);
    // const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();

    const [newComment, setNewComment] = useState('');

    // getting/filtering comments from DB
    const comments = useSelector(state => state.comments.entries);
    // console.log('comments on this photo', comments); // object of arrays

    let allComments = Object.values(comments);
    // console.log('allComments', allComments);

    useEffect(() => {
        dispatch(loadComments(id));
    }, [dispatch, id]);

    const addComment = async e => {
        e.preventDefault();

        const comment = {
            userId: sessionUser.id,
            photoId: id,
            comment: newComment
        }

        dispatch(createComment(comment));
        setNewComment('');
    }

    return (
        <div className="comments-container">
            {allComments.map((comment) => (
                <div className="comment" key={`${comment.id}`}>
                <div className="comment-details">
                    <NavLink id='comment-username'
                    to={`/users/${comment.userId}`}
                    >{`@${comment.User.username}`}</NavLink>
                    <p>{comment.comment}</p>
                    {comment.User.id === sessionUser.id ? (
                        // <div className="delete-comment-btn">
                            <DeleteCommentModal comment={comment} />
                        // </div>
                    ) : (
                        ""
                    )}
                </div>
                </div>
            ))}
            <hr id='create-comment-hr' />
            {/* insert add comment textbox */}
            <div className='create-comment-container'>
                <form onSubmit={addComment}>
                    <textarea className='create-comment-box' value={newComment} onChange={e => setNewComment(e.target.value)} placeholder=" Leave a comment!" required ></textarea>
                    <button id='create-comment-btn'>Comment</button>
                </form>
            </div>
        </div>
    );

}

export default Comments;
