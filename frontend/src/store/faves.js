import { csrfFetch } from './csrf';

// get all faves for each photo
const GET_PHOTO_FAVES = 'faves/GET_PHOTO_FAVES';
// get all photos faved by user
const GET_USER_FAVES = 'faves/GET_USER_FAVES';

const CREATE_FAVES =  'faves/CREATE_FAVES';
const DELETE_FAVES = 'faves/DELETE_FAVES';

// get all faves for each photo
const loadPhotoFaves = (faves) => ({
    type: GET_PHOTO_FAVES,
    faves
})

// get all photos faved by user
const loadUserFaves = (photos) => ({
    type: GET_USER_FAVES,
    photos
})

// create a fave for one photo
const createFave = (fave) => ({
    type: CREATE_FAVES,
    fave
})

// delete a fave for one photo
const deleteFave = (fave) => ({
    type: DELETE_FAVES,
    fave
})

//  -------------------------thunks----------------------------

// get all faves for each photo
export const getPhotoFaves = (photoId) => async dispatch => {
    const res = await csrfFetch(`/api/photos/${photoId}/fave`);
    if (res.ok) {
        const faves = await res.json();
        console.log('THIS IS GET ALL FAVES FOR ONE PHOTO', faves)
        dispatch(loadPhotoFaves(faves));
        return res;
    }
}

// get all photos faved by user
export const getUserFaves = (userId) => async dispatch => {
    const res = await csrfFetch(`/api/faves/users/${userId}`);
    if (res.ok) {
        const faves = await res.json();
        console.log('THIS IS GET ALL PHOTOS FAVED BY USER', faves)
        dispatch(loadUserFaves(faves));
        return res;
    }
}

// create a fave for one photo
export const addFave = (payload) => async dispatch => {
    const { photoId, userId } = payload;
    const res = await csrfFetch(`/api/photos/${photoId}/fave`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if (res.ok) {
        const fave = await res.json();
        console.log('THIS IS A FAVE FROM CREATE FAVE THUNKKKKK', fave)
        dispatch(createFave(fave));
    }
}

// delete a fave for one photo
export const removeFave = (faveId) => async dispatch => {
    const res = await csrfFetch(`/api/faves/${faveId}`, {
        method: 'DELETE'
    })
    if (res.ok) {
        const fave = await res.json();
        console.log('THIS IS THE FAVE FROM DELETE FAVE THUNK', fave)
        dispatch(deleteFave(fave));
    }
}

// -------------------reducer-------------------------
const initialState = {};

const favesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTO_FAVES:
            const faves = {};
            action.faves.forEach(fave => {
                faves[fave.id] = fave
            })
            return {
                ...faves
            }
        case GET_USER_FAVES:
            const userFaves = {};
            action.userFaves.forEach(fave => {
                userFaves[fave.id] = fave?.Photo;
            })
            return {
                ...userFaves
            }
        case CREATE_FAVES:
            const newFave = { ...state };
            newFave[action.fave.id] = action.fave;
            return {
                ...newFave
            }
        case DELETE_FAVES:
            const deletedFave = {};
            return {
                ...deletedFave
            }
        default:
            return state;
    }
}

export default favesReducer;
