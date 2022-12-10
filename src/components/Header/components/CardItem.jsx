import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from './FavoriteIcon';


const CardItem = ({ item, index }) => {
    return (
        <Card sx={{ maxWidth: 345, maxHeight: 550, minHeight: 550, margin: 2, position: "relative" }} key={index}>
            <div style={{ position: "absolute", right: 0 }} >
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