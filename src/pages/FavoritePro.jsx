import React from 'react'
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 
 import CardItem from '../components/Header/components/CardItem';


const FavoritePro = () => {
    const { favoriteList } = useSelector(state => state.favorite) 
 
    return (
        <>
            <Typography variant="h2" color="orange" align="center" mt={2} >FAVORİTE ITEMS</Typography>
            <Box
                xs={{ d: "flex" }}
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
                flexWrap="wrap">
                {favoriteList?.map((item, index) => {
                    return ( 
                        <CardItem item={item} index={index}/> 
                    )
                }
                )}
            </Box> 
        </>
    )
}

export default FavoritePro