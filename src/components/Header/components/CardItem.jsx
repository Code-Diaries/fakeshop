import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
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

    return (
        <Card sx={{ maxWidth: 250, minWidth: 250, maxHeight: 350, minHeight: 350, margin: 2, position: "relative", background: "#fff3e0" }} key={index}>
            <div style={{ position: "absolute", right: 0 }} onClick={() => favoriteHandler(item)}>
                <FavoriteIcon item={item} />
            </div>

            <CardMedia
                component="img"
                alt={item?.title}
                height="200"
                image={item?.image}
                style={{ objectFit: "contain", width: 250, height: 180, background: "white" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" height={40} style={{ fontSize: ".7rem" }}>
                    {item?.title}
                </Typography>

                <Typography variant="h6" color="primary"   >
                    <Rating name="read-only" value={item?.rating?.rate} readOnly style={{ fontSize: "1rem" }} />
                </Typography>
                <Typography variant="h5" color="orange" style={{ fontSize: "1rem", fontWeight: "600" }}>
                    {item?.price} TL
                </Typography>
            </CardContent>
            <CardActions style={{ marginTop: "0" }}>
                <Button size="small" style={{ color: "white", background: "orange" }}>Sepete Ekle</Button>
            </CardActions>
        </Card>
    )
}

export default CardItem