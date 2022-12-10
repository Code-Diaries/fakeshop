import React from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteFavItem, setFavItems } from '../../features/favoriteSlice/favSlice';

const FavoriteIcon = ({ item }) => {

    const { favItems } = useSelector((state) => state.fav);

    const dispatch = useDispatch();
    const handleFavorite = (e) => {
        console.log(favItems);
        if (e) {
            dispatch(setFavItems(item))
        } else {
            dispatch(setDeleteFavItem(item))
        }
        console.log(item);



    }


    return (
        <div >
            {
                (favItems?.filter((e) => e.id === item.id).length > 0) ?
                    <FavoriteRoundedIcon id={item?.id} onClick={() => handleFavorite(false)} />
                    : <FavoriteBorderRoundedIcon id={item?.id} onClick={() => handleFavorite(true)} />
            }
        </div>
    )
}

export default FavoriteIcon