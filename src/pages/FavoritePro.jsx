import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, Card, Button, CardMedia, CardContent, CardActions } from '@mui/material';
import { Box } from '@mui/system';

const FavoritePro = () => {
    const { favoriteList } = useSelector(state => state.favorite)
    console.log(favoriteList)
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", fontSize: "4rem", margin: "2rem", color: "orange" }}>FAVORİTE ITEMS</div>
            <Box
                xs={{ d: "flex" }}
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
                flexWrap="wrap">
                {favoriteList?.map((item, index) => {
                    return (
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
                    )
                }
                )}
            </Box>

        </>
    )
}

export default FavoritePro