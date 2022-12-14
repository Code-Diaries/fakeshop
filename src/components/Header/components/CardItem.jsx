import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from './FavoriteIcon';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavoriteList, removeFromFavouriteList } from '../../../features/favoriteSlice/favoriteSlice';


const CardItem = ({ item, index }) => {
    const dispatch = useDispatch()
    const { favoriteList } = useSelector(state => state.favorite)

    const favoriteHandler = (item) => {


        if (favoriteList.includes(item)) {
            return dispatch(removeFromFavouriteList(item))

        }
        dispatch(addToFavoriteList(item))

    }
    console.log(favoriteList)
    return (
        <Card sx={{ maxWidth: 345, maxHeight: 550, minHeight: 550, margin: 2, position: "relative" }} key={index}>
            <div style={{ position: "absolute", right: 0 }} onClick={favoriteHandler(item)}>
                <FavoriteIcon item={item} />
            </div>

            <CardMedia
                component="img"
                alt={item?.title}
                height="250"
                image={item?.image}
                style={{ objectFit: "contain", width: 350, height: 250, }}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" minHeight={100}>
                    {item?.title}
                </Typography>

                <Typography variant="h6" color="primary" height="35">
                    Rate: {item?.rating?.rate}
                </Typography>
                <Typography variant="h3" color="orange" height="60">
                    {item?.price} TL
                </Typography>
            </CardContent>
            <CardActions height="35">
                <Button size="small">Sepete Ekle</Button>
            </CardActions>
        </Card>
    )
}

export default CardItem