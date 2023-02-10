import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { Rating } from '@mui/material';
import { setBasketCount, setBasketItem, setBasketOpen } from '../features/basketSlice/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
 import SnackBar from '../components/SnackBar';
const ProductDetail = () => {
  const { state: item } = useLocation();
  const dispatch = useDispatch()
  const { basketOpen, basketItem } = useSelector((state) => state.basket);
  const [open, setOpen] = React.useState(false); 

  const handleAddDetail = () => {
    dispatch(setBasketOpen(basketOpen))
    dispatch(setBasketItem(item))
    dispatch(setBasketCount())
    dispatch(setBasketOpen(!basketOpen))
    setOpen(true); 
  };

 return ( 
  <Grid container spacing={1} alignItems="center" justifyContent="center">
  <Grid container item spacing={3} >
  <Grid item lg={4} sm={12} marginLeft={3}>
    <Item>
      <img
        alt={item?.title}
        width="400"
        height="500"
        src={item?.image}
        objectFit="contain" />
    </Item>
  </Grid>
  <Grid item lg={6} sm={12} marginTop={2}  >
    <Item >
      <Typography variant='h3' fontSize={40} fontWeight={400} color="text.secondary" gutterBottom>
        {item?.title}
      </Typography>
      <Typography color="orange" variant="body2" >
        <Rating value={item?.rating?.rate} readOnly style={{ fontSize: "1rem", marginTop: "0" }} />
      </Typography>
      <Typography variant="h3">
        {item?.description}
      </Typography>
    </Item>
    <Grid item spacing={3}>
      <Item>
        <Typography variant="body2" fontSize={30} color="orange">
          {item?.price} TL
        </Typography>
        <Button size="large" style={{ background: "orange", color: "white" }}
          onClick={handleAddDetail}>ADD CART</Button>
      </Item>
    </Grid>
  </Grid>
  <Grid item lg={1} spacing={3} marginTop={2}>
    <a href="/">
      <Button style={{ background: "grey", color: "white" }}> Go HOME</Button>
    </a>
  </Grid>
</Grid>
{open ? <SnackBar setOpen={setOpen} open={open} /> :   <></>} 
</Grid>   
  )
}

export default ProductDetail
