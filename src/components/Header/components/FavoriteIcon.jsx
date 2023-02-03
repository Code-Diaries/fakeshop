import React from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useDispatch, useSelector } from 'react-redux';

const FavoriteIcon = ({ item }) => {

    const { favoriteList } = useSelector(state => state.favorite)
    const dispatch = useDispatch()
    
    console.log(favoriteList)
    console.log(favoriteList.map((i) => i.id))
    console.log(item.id)


    return (
        <div>
            {favoriteList?.map((i) => i.id).includes(item.id) ? <FavoriteRoundedIcon style={{ fill: "orange" }} /> : <FavoriteBorderRoundedIcon />}
        </div>
    )
}

export default FavoriteIcon
