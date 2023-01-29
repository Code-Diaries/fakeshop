import React from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useSelector } from 'react-redux';

const FavoriteIcon = ({ item }) => {
    const { favoriteList } = useSelector(state => state.favorite) 
    return (
        <div>
            {favoriteList?.includes(item) ? <FavoriteRoundedIcon style={{fill: "orange"}} /> : <FavoriteBorderRoundedIcon  />}
        </div>
    )
}

export default FavoriteIcon