import { csrfFetch } from './csrf';

const VIEW_COMMENTS = '/photos/VIEW_COMMENTS';
// const ADD_COMMENT = 'photos/ADD_COMMENT';
// const UPDATE_COMMENT = '/photos/UPDATE_COMMENT';
// const REMOVE_COMMENT = '/photos/REMOVE_COMMENT';

const viewComments = comments => ({
    type: VIEW_COMMENTS,
    comments
})

export const loadComments = id => async dispatch => {
    const res = await csrfFetch(`/api/comments/${id}`);
    if (res.ok) {
        const comments = await res.json();
        dispatch(viewComments(comments));
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
        default:
            return state;
    }
}
export default commentsReducer;
