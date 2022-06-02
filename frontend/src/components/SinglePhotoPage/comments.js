import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, NavLink, useHistory } from 'react-router-dom';
import { loadComments, createComment, deleteComment } from '../../store/comments';

import './singlephotopage.css';

const Comments = () => {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();

    // const [newComment, setNewComment] = useState('');
    // const [deletedCommentId, setDeletedCommentId] = useState('');

    // getting/filtering comments from DB
    const comments = useSelector(state => state.comments.entries);
    console.log('comments on this photo', comments); // object of arrays

    let allComments = Object.values(comments);
    console.log('allComments', allComments);

    let userComments = Object.values(comments).filter(comment => comment.userId === sessionUser.id)
    console.log('userComments', userComments);

    let otherComments = Object.values(comments).filter(comment => comment.userId !== sessionUser.id)
    console.log('otherComments', otherComments);


    useEffect(() => {
        dispatch(loadComments(id));
    }, [dispatch, id]);

    // const addComment = async e => {
    //     e.preventDefault();

    //     const comment = {
    //         userId: sessionUser.id,
    //         photoId: id,
    //         comment: newComment
    //     }

    //     dispatch()
    // }

    return (
        <div className="comment-container">
                {allComments.map((comment) => (
                    <div className="comment" key={`${comment.id}`}>
                    <div className="comment-details">
                      <NavLink
                        to={`/users/${comment.userId}`}
                      >{`@${comment.User.username}`}</NavLink>
                      <p>{comment.comment}</p>
                    </div>
                    {comment.User.id === sessionUser.id ? (
                      <div className="delete-comment-btn">
                        {/* <DeleteComment comment={comment} /> */}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
              </div>
    );

    // comments owned by user
    // if (sessionUser.id === userComments.userId) {
    //     return (
    //         <div className='photos-comments-faves'>
    //             <div className='comments-container'>
    //                 {Object.values(otherComments).map(comment => (
    //                     <div key={comment.id}>
    //                         <a href={`/users/${comment.User.id}`} onClick={e => {
    //                             e.preventDefault();
    //                             history.push(`/users/${comment.User.id}`)
    //                         }}>
    //                             <p className='comment-username'>{comment.User.username}</p>
    //                         </a>
    //                         <p className='user-comment'>{comment.comment}</p>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     )
    // }

    // comments not owned by user
}

export default Comments;
