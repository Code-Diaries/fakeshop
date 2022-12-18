import React, { useEffect } from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoriteList } from '../../../features/favoriteSlice/favoriteSlice';

const FavoriteIcon = ({ item }) => {
    const { favoriteList } = useSelector(state => state.favorite)
    const dispatch = useDispatch()

    // console.log(item)
    // console.log(items.includes(item))

    useEffect(() => {

        // const items = JSON.parse(localStorage.getItem('items'))
        // console.log(items.length > 0)
        // if (items.length > 0) {
        //     dispatch(addToFavoriteList([...items]))
        // }

    }, [])


    return (
        <div>
            {favoriteList.includes(item) ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
        </div>
    )
}

export default FavoriteIcon