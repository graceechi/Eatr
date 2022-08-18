import { csrfFetch } from './csrf';

const VIEW_COMMENTS = '/photos/VIEW_COMMENTS';
const ADD_COMMENT = 'photos/ADD_COMMENT';
const UPDATE_COMMENT = '/photos/UPDATE_COMMENT';
const REMOVE_COMMENT = '/photos/REMOVE_COMMENT';

const viewComments = comments => ({
    type: VIEW_COMMENTS,
    comments
})

const addComment = comment => ({
    type: ADD_COMMENT,
    comment
})

const updateComment = comment => ({
    type: UPDATE_COMMENT,
    comment
})

const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
})

export const loadComments = id => async dispatch => {
    const res = await csrfFetch(`/api/comments/${id}`);
    if (res.ok) {
        const comments = await res.json();
        dispatch(viewComments(comments));
    }
}

export const createComment = data => async dispatch => {
    const res = await csrfFetch(`/api/comments/${data.photoId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (res.ok) {
        const newComment = await res.json();
        dispatch(addComment(newComment));
    }
}

export const editComment = payload => async dispatch => {
    const { userId, photoId, commentId, comment } = payload;
    const res = await csrfFetch(`/api/comments/${commentId}`, {
        method: "PUT",
        body: JSON.stringify({ userId, photoId, comment })
    });
    const updatedComment = await res.json();
    dispatch(updateComment(updatedComment));
}

export const deleteComment = id => async dispatch => {
    const res = await csrfFetch(`/api/comments/${id}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        dispatch(removeComment(id));
    }
}

const initialState = { entries: {}, isLoading: true }

const commentsReducer = (state = initialState, action) => {
    // let newState = {};
    switch (action.type) {
        case VIEW_COMMENTS: {
            const newState = { entries: {} };
            action.comments.forEach(comment => {
                newState.entries[comment.id] = comment;
            });
          return newState;
        }

        case ADD_COMMENT: {
            const newState = { ...state, entries: {...state.entries} };
            newState.entries[action.comment.id] = action.comment;
          return newState;
        }

        case UPDATE_COMMENT:
            // const newState = { ...state, entries: { ...state.entries } };
            // newState.entries[action.comment.id] = action.comment;
            // return newState;
            return {
                ...state,
                entries: {
                  ...state.entries,
                  [action.comment.id]: action.comment,
                },
            };

        case REMOVE_COMMENT: {
            const newState = { ...state, entries: {...state.entries} }
            delete newState.entries[action.comment];
            return newState;
        }
        default:
            return state;
    }
}
export default commentsReducer;
