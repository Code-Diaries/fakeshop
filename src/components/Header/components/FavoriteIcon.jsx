import React from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useDispatch, useSelector } from 'react-redux';

const FavoriteIcon = ({ item }) => {

    const { favoriteList } = useSelector(state => state.favorite)
    const dispatch = useDispatch()


    return (
        <div>
            {favoriteList?.includes(item) ? <FavoriteRoundedIcon style={{ fill: "orange" }} /> : <FavoriteBorderRoundedIcon />}
        </div>
    )
}

export default FavoriteIcon