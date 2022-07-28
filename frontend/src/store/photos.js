import { csrfFetch } from "./csrf";

const LOAD_PHOTOS = 'photos/LOAD_PHOTOS';
const LOAD_ONE_PHOTO = 'photos/LOAD_ONE_PHOTO';
const LOAD_USER_PHOTOS = 'photos/LOAD_USER_PHOTOS'
const ADD_ONE_PHOTO = 'photos/ADD_ONE_PHOTO';
const UPDATE_PHOTO = '/photos/UPDATE_PHOTO';
const DELETE_PHOTO = '/photos/DELETE_PHOTO';


const load = photos => ({
  type: LOAD_PHOTOS,
  photos,
})

const loadOnePhoto = photo => ({
  type: LOAD_ONE_PHOTO,
  photo,
});

const loadUserPhotos = photos => ({
  type: LOAD_USER_PHOTOS,
  photos
})

const addOnePhoto = photo => ({
  type: ADD_ONE_PHOTO,
  photo
})

const updatePhoto = photo => ({
  type: UPDATE_PHOTO,
  photo
})

const deletePhoto = photo => ({
  type: DELETE_PHOTO,
  photo
})

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

export const updateUserPhoto = photo => async dispatch => {
  const res = await csrfFetch(`/api/photos/${photo.id}`, {
    method: 'PUT',
    body: JSON.stringify(photo),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (res.ok) {
    const updatedPhoto = await res.json();
    dispatch(updatePhoto(updatedPhoto));
    return updatedPhoto;
  }
}

export const deleteUserPhoto = id => async dispatch => {
  const res = await csrfFetch(`/api/photos/${id}`, {
    method: 'DELETE',
  });
  if (res.ok) {
    dispatch(deletePhoto(id));
  }
}

// upload a photo
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

//  upload a photo with AWS S3
export const uploadPhotoAws = data => async dispatch => {
  const { userId, caption, photo } = data;
  const formData = new FormData();
  formData.append("userId", userId);
  formData.append("caption", caption);
  formData.append("image", photo);

  console.log('----DO I HIT THIS AWS UPLOAD THUNK????')
  const res = await csrfFetch(`/api/photos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    body: formData,
  });

  console.log('----PART 2 OF AWS THUNK')
  const newPhoto = await res.json();
  if (newPhoto) {
    dispatch(addOnePhoto(newPhoto));
  }
  return newPhoto;

}


export const getUserPhotos = id => async dispatch => {
  const res = await csrfFetch(`/api/users/${id}`)
  if (res.ok) {
    const photos = await res.json();

    dispatch(loadUserPhotos(Object.values(photos)));
  }
}

const initialState = { entries: {}, isLoading: true }

const photosReducer = (state = initialState, action) => {
  // let newState = {};
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

    case LOAD_USER_PHOTOS: {
      const newState = { ...state, entries: {} };
      action.photos.forEach(photo => {
        newState.entries[photo.id] = photo;
      });
      return newState;
    }

    case UPDATE_PHOTO: {
      const newState = { ...state, entries: {...state.entries} }
      newState.entries[action.photo.id] = action.photo;
      return newState;
    }

    case ADD_ONE_PHOTO: {
      const newState = { ...state, entries: {...state.entries} }
      newState.entries[action.photo.id] = action.photo;

      return newState;
    }

    case DELETE_PHOTO:
      const newState = { ...state, entries: {...state.entries} }
      delete newState.entries[action.photo];
      return newState;

    default:
      return state;
  }
};

export default photosReducer;
