import React, { useEffect } from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoriteList } from '../../../features/favoriteSlice/favoriteSlice';

const FavoriteIcon = ({ item }) => {
    const { favoriteList } = useSelector(state => state.favorite)
    const dispatch = useDispatch()



    // console.log(favoriteList)
    // console.log(favoriteList.map((i) => i.id))
    // console.log(item.id)

    return (
        <div>
            {favoriteList?.map((i) => i.id).includes(item.id) ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
        </div>
    )
}

export default FavoriteIcon