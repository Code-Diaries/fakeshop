import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, Rating } from '@mui/material';
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
    <Grid container marginTop="7.5rem" marginBottom="1rem" justifyContent={"center"} alignItems="center" spacing={2}  >
      <Grid item xs={5}>
        <Item>
          <img
            alt={item?.title}
            width="60%"
            backgroundColor="transparent"
            height="auto"
            src={item?.image}
            objectFit="contain" /> </Item>
      </Grid>
      <Grid item xs={5}>
        <Item>   <Typography variant='h3' fontSize={40} fontWeight={400} color="black" >
          {item?.title}
        </Typography>
          <Typography color="orange" variant="h4" >
            <Rating value={item?.rating?.rate} readOnly style={{ fontSize: "1rem", marginTop: "0" }} />
          </Typography>
          <Typography variant="h5">
            {item?.description}
          </Typography>
          <Typography variant="body2" fontSize={30} color="orange">
            {item?.price} TL
          </Typography>
          <Button size="small" style={{ background: "orange", color: "white" }}
            onClick={handleAddDetail}>ADD CART
          </Button></Item>
      </Grid>
      <Grid item xs={1}>
        <Item> <Link href="/" style={{ background: "orange", color: 'white', underline: "none" }}>
          Go Home
        </Link></Item>
      </Grid>
      {open ? <SnackBar setOpen={setOpen} open={open} /> : <></>}

    </Grid>




  )
}

export default ProductDetail
