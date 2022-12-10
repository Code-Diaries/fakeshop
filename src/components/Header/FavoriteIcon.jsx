import React from 'react'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { setFavorite, setFavoriteItem, setFavoriteList } from '../../features/favoriteSlice/favoriteSlice';
import { useDispatch, useSelector } from 'react-redux';

const FavoriteIcon = ({ item }) => {
    const { favorite, favoriteList, favoriteItem } = useSelector((state) => state.favorite);
    const { filteredList, find } = useSelector((state) => state.filter);
    const { productList } = useSelector((state) => state.product);
    let displayArray = (filteredList.length ? filteredList : productList)
    const dispatch = useDispatch();
    const handleFavorite = (e) => {
        if (favorite) {
            let data = (find?.length ? find : displayArray).filter((i) => {
                console.log(i.id);
                console.log(e.target.id);
                return (

                    i.id === Number(e.target.id)
                )
            })


            dispatch(setFavoriteList([...favoriteList, {
                favoriteItems: data[0],
                favorite: true,
                favoriteId: data[0].id
            }]))
            data = []
            dispatch(setFavorite(!favorite))
        } else {

        }


        // favoriteList?.filter((i) => { i.favoriteId !== e.target.id })


    }

    console.log(favoriteItem);
    console.log(favoriteList);
    return (
        <div onClick={handleFavorite}>
            {
                !favorite ?
                    <FavoriteRoundedIcon id={item?.id} />
                    : <FavoriteBorderRoundedIcon id={item?.id} />
            }
        </div>
    )
}

export default FavoriteIcon