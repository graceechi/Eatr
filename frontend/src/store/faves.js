// import { csrfFetch } from './csrf';

// // create, get, delete faves
// const CREATE_FAVES =  'faves/CREATE_FAVES';
// // on single photo page
// const LOAD_PHOTO_FAVES = 'faves/LOAD_PHOTO_FAVES';
// // on user profile page
// const LOAD_USER_FAVES = 'faves/LOAD_USER_FAVES';
// const DELETE_FAVES = 'faves/DELETE_FAVES';

// const loadUserFaves = (photos) => {
//     return {
//         type: LOAD_USER_FAVES,
//         photos
//     }
// }

// export const loadFavePhotos = (userId) => async (dispatch) => {
//     const res = await csrfFetch(`/api/faves/users/${userId}`);
//     const faves = await res.json();
//     dispatch(loadUserFaves(faves));
// }

// const initialState =
