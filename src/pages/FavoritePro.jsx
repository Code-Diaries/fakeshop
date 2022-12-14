import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, Card, Button, CardMedia, CardContent, CardActions } from '@mui/material';

const FavoritePro = () => {
    const { favoriteList } = useSelector(state => state.favorite)
    console.log(favoriteList)
    return (
        <>
            <div>FAVORİTE ITEMS</div>
            {favoriteList?.map((item, index) => {
                <Card sx={{ maxWidth: 345, maxHeight: 450, minHeight: 450, margin: 2 }} key={index}>
                    <CardMedia
                        component="img"
                        alt={item?.title}
                        height="250"
                        image={item?.image}
                        style={{ objectFit: "contain", width: 350, height: 250, }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" >
                            {item?.title}
                        </Typography>
                        <Typography variant="h6" color="primary">
                            Rate: {item?.rating?.rate}
                        </Typography>
                        <Typography variant="h3" color="orange">
                            {item?.price} TL
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Sepete Ekle</Button>
                    </CardActions>
                </Card>
            }
            )}
        </>
    )
}

export default FavoritePro