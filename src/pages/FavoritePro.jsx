import React from 'react'
import { useSelector } from 'react-redux'
import { Typography, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';



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
                        <Card sx={{ maxWidth: 250, minWidth: 250, maxHeight: 350, minHeight: 350, margin: 2, padding: 2, background: "##F5F5F5" }} key={index}>

                            <CardMedia
                                component="img"
                                alt={item?.title}
                                height="200"
                                image={item?.image}
                                style={{ objectFit: "contain", width: 250, height: 180, background: "white" }}
                            />
                            <CardContent>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography gutterBottom variant="h6" component="div" height={40} style={{ fontSize: ".6rem", marginTop: ".5rem" }}>
                                        {item?.title}
                                    </Typography>

                                    <Typography variant="h6" color="primary"   >
                                        <Rating name="read-only" value={item?.rating?.rate} readOnly style={{ fontSize: "1rem", marginTop: "0" }} />
                                    </Typography>
                                </div>

                            </CardContent>
                            <CardActions style={{ marginTop: "0", display: "flex", justifyContent: "space-between" }}>
                                <Typography variant="h5" color="orange" style={{ fontSize: "1rem", fontWeight: "600" }}>
                                    {item?.price} TL
                                </Typography>
                                <div style={{ background: "#EDCF65", padding: "1rem", width: "4rem", display: "flex", justifyContent: "space-evenly" }}>
                                    <RemoveRedEyeIcon />
                                    <ShoppingBasketIcon />
                                </div>
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