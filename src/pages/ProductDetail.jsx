import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router';
import CardMedia from '@mui/material/CardMedia';
import { Rating } from '@mui/material';
import { setBasketCount, setBasketItem, setBasketOpen } from '../features/basketSlice/basketSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
  const { state: item } = useLocation();
  const dispatch = useDispatch()
  const { basketOpen, basketItem } = useSelector((state) => state.basket);

  const handleAddDetail = () => {
    dispatch(setBasketOpen(basketOpen))
    dispatch(setBasketItem(item))
    dispatch(setBasketCount())
    console.log("clicked");
    dispatch(setBasketOpen(!basketOpen))
  };
  console.log(item);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <CardMedia
          component="img"
          alt={item?.title}
          width="400"
          height="600"
          image={item?.image}
          style={{ objectFit: "contain", background: "white" }}
        />


      </Card>

      <Card sx={{
        width: 700,
        height: 600,
      }}>
        <CardContent>
          <Typography sx={{ fontSize: 40, fontWeight: 400 }} color="text.secondary" gutterBottom>
            {item?.title}
          </Typography>
          <Typography variant="h5" component="div">
            <Rating name="read-only" value={item?.rating?.rate} readOnly style={{ fontSize: "1rem", marginTop: "0" }} />

          </Typography>
          <Typography sx={{ fontSize: 30, color: "red", fontWeight: "bold" }} >
            {item?.price} TL
          </Typography>
          <Typography variant="body2">
            {item?.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" style={{ background: "orange", color: "white" }}
            onClick={handleAddDetail}>ADD CHART</Button>
        </CardActions>
      </Card>




    </div>
  )
}

export default ProductDetail