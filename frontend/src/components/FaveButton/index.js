import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFave, removeFave } from '../../store/photos';
import './favebutton.css';

const FaveButton = ({ photo, small }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const isFavorited = photo.Faves?.filter(
        (fave) => fave.userId === sessionUser.id
    );
    const [favorited, setFavorited] = useState(isFavorited && isFavorited.length > 0);
    const photoId = photo.id;
    const userId = sessionUser.id;

    const handleFaveClick = () => {
        let currentFavesCount = photo.favesCount;
        currentFavesCount += 1;
        setFavorited(true);
        dispatch(
            addFave({
                photoId,
                userId,
                imageUrl: photo.imageUrl,
                favesCount: currentFavesCount,
                photoUserId: photo.User.id
            })
        )
    };

    const handleUnfaveClick = () => {
        let currentFavesCount = photo.favesCount;
        currentFavesCount += 1;
        setFavorited(false);
        dispatch(
            removeFave({
                photoId,
                userId,
                imageUrl: photo.imageUrl,
                favesCount: currentFavesCount,
                photoUserId: photo.User.id
            })
        )
    };

    if (!small) {
        return (
            <i
                className={`fa-solid fa-heart fa-2xl ${favorited ? "red" : ""}`}
                onClick={favorited ? handleUnfaveClick : handleFaveClick}
            ></i>
        );
    } else {
        return (
            <i
            className={`fa-solid fa-heart small ${favorited ? "red" : ""}`}
            onClick={favorited ? handleUnfaveClick : handleFaveClick}
            ></i>
        );
    }
};

export default FaveButton;
