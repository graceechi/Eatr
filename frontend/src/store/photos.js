import { csrfFetch } from "./csrf";

// read photos & faves
const LOAD_USER_PHOTOS = "profile/LOAD_USER_PHOTOS";
const LOAD_USER_FAVES = "profile/LOAD_USER_FAVES";
// create(upload) & delete photos
const ADD_PHOTO = "image/ADD_PHOTO";
const DELETE_PHOTO = "image/DELETE_PHOTO";

const loadUserPhotos = (photos) => {
  return {
    type: LOAD_USER_PHOTOS,
    photos,
  };
};

const loadUserFaves = (photos) => {
  return {
    type: LOAD_USER_FAVES,
    photos,
  };
};

const addPhoto = (photo) => {
  return {
    type: ADD_PHOTO,
    photo,
  };
};

const deletePhoto = (photo) => {
  return {
    type: DELETE_PHOTO,
    photo,
  };
};

export const loadPhotos = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/profile/${userId}/images`);
  if (res.ok) {
    const images = await res.json();
    dispatch(loadUserPhotos(images));
  }
};

export const loadFaves = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/favorites/users/${userId}`);
  const favorites = await res.json();
  dispatch(loadUserFaves(favorites));
};

export const uploadPhoto = (submission) => async (dispatch) => {
  const { title, caption, photo, userId } = submission;
  const formData = new FormData();
  formData.append("userId", userId);
  if (title) formData.append("title", title);
  if (caption) formData.append("caption", caption);
  if (photo) formData.append("photo", photo);
  const res = await csrfFetch(`/api/photos`, {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  if (res.ok) {
    const image = await res.json();
    dispatch(addPhoto(image));
    return image;
  } else {
    const errors = await res.json();
    console.log(errors);
  }
};

export const removePhoto = (photoId) => async (dispatch) => {
  const res = await csrfFetch(`/api/photos/${photoId}`, {
    method: "DELETE",
  });
  const image = await res.json();
  dispatch(deletePhoto(image));
};

const initialState = {
  profileImages: {},
  favePhotos: {},
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_PHOTOS:
      const allImages = {};
      action.images.forEach((image) => (allImages[image.id] = image));
      return {
        ...state,
        profileImages: {
          ...allImages,
        },
      };

    case LOAD_USER_FAVES:
      return {
        ...state,
        favePhotos: { ...action.images },
      };

    case ADD_PHOTO:
      const newState = {
        ...state,
        profileImages: {
          ...state.profileImages,
          [action.image.id]: action.image,
        },
      };
      return newState;

    case DELETE_PHOTO:
      const updatedState = {
        ...state,
        profileImages: {
          ...state.profileImages,
        },
      };
      delete updatedState.profileImages[action.image.id];
      return updatedState;

    default:
      return state;
  }
};

export default photosReducer;
