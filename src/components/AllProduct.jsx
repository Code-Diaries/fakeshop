import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProduct, clearAllProducts} from "../features/productSlice"
import { getChoosens } from '../features/selectSlice';
import loadinGif from "../assets/loading.gif";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";



const AllProduct = () => {

    const { AllProducts, loading, error} = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(getProduct());

        //! Cleanup function (ComponentDidUnmount)
        //! State'de kalan news bilgilerini news sayfasidan ayrildiktan sonra sil.
        return () => {
          dispatch(clearAllProducts());
        };
      }, []);
 
 
 
  return (
    <>
    {error && (
      <Typography variant="h3" color="error" align="center" mt={20}>
        {error}
      </Typography>
    )}
    {loading && (
      <Box display="flex" alignItems="center" justifyContent="center">
        <img src={loadinGif} />
      </Box>
    )}
    {!loading && (
      <Box
        xs={{ d: "flex", mt:5 }}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {AllProducts?.map((item, id) => (
          <Card sx={{ maxWidth: 300, m: 2, maxHeight: 500, minWidth: 300}} key={id}>
            <CardMedia
              component="img"
              height="250"
              image={item?.image}
              alt="img"
            />
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                {item?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{m:1}}>
                {item?.price}$
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">add to Basket</Button>
              <Button size="small">like</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    )}
  </>
  )
}

export default AllProduct