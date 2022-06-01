import { csrfFetch } from "./csrf";

const LOAD_PHOTOS = 'photos/LOAD_PHOTOS';
const LOAD_ONE_PHOTO = 'photos/LOAD_ONE_PHOTO';
const ADD_ONE_PHOTO = 'photos/ADD_ONE_PHOTO';
// const UPDATE_PHOTO = '/photos/UPDATE_PHOTO';
// const DELETE_PHOTO = '/photos/DELETE_PHOTO';


const load = photos => ({
  type: LOAD_PHOTOS,
  photos,
})

const loadOnePhoto = photo => ({
  type: LOAD_ONE_PHOTO,
  photo,
});

const addOnePhoto = photo => ({
  type: ADD_ONE_PHOTO,
  photo
})

// const updatePhoto = photo => ({
//   type: UPDATE_PHOTO,
//   photo
// })

// const deletePhoto = photo => ({
//   type: DELETE_PHOTO,
//   photo
// })

// thunk
export const getPhotos = () => async dispatch => {
  const res = await csrfFetch('/api/photos/explore');

  if (res.ok) {
    const photos = await res.json();
    dispatch(load(photos));
  }
}

export const getOnePhoto = id => async dispatch => {
  const res = await csrfFetch(`/api/photos/${id}`)
  if (res.ok) {
    const photo = await res.json();
    dispatch(loadOnePhoto(photo));
  }
}

export const uploadPhoto = data => async dispatch => {
  const res = await csrfFetch(`/api/photos/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const photo = await res.json();
    dispatch(addOnePhoto(photo));
    return photo;
  }
}

// export const uploadPhoto = (submission) => async (dispatch) => {
//   const { caption, photo, userId } = submission;
//   const formData = new FormData();
//   formData.append("userId", userId);
//   if (caption) formData.append("caption", caption);
//   if (photo) formData.append("photo", photo);
//   const res = await csrfFetch(`/api/photos`, {
//     method: "POST",
//     body: formData,
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   if (res.ok) {
//     const image = await res.json();
//     dispatch(addPhoto(image));
//     return image;
//   } else {
//     const errors = await res.json();
//     console.log(errors);
//   }
// };

export const getUserPhotos = id => async dispatch => {
  const res = await csrfFetch(`/api/users/${id}`)
  if (res.ok) {
    const photos = await res.json();
    console.log('store photo', photos)
    dispatch(load(Object.values(photos)));
  }
}

const initialState = { entries: {}, isLoading: true }

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHOTOS: {
      const newState = { ...state, entries: {...state.entries} };
      action.photos.forEach(photo => {
        newState.entries[photo.id] = photo;
      });
      return newState;
    }

    case LOAD_ONE_PHOTO: {
      const newState = { ...state, entries: {...state.entries} };
      newState.entries[action.photo.id] = action.photo;
      return newState;
    }

    // case LOAD_USER_FAVES:
    //   return {
    //     ...state,
    //     favePhotos: { ...action.images },
    //   };

    // case ADD_PHOTO:
    //   const newState = {
    //     ...state,
    //     profileImages: {
    //       ...state.profileImages,
    //       [action.image.id]: action.image,
    //     },
    //   };
    //   return newState;

    // case DELETE_PHOTO:
    //   const updatedState = {
    //     ...state,
    //     profileImages: {
    //       ...state.profileImages,
    //     },
    //   };
    //   delete updatedState.profileImages[action.image.id];
    //   return updatedState;

    default:
      return state;
  }
};

export default photosReducer;
