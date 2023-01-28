import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { clearAll, removeItemFromBasket, setBasketCount, setBasketDecrease, setBasketItem, setBasketOpen } from '../../../features/basketSlice/basketSlice';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TextField from '@mui/material/TextField';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const style = {
    position: 'absolute',
    top: '40%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const BasketModal = () => {
    const { basketOpen, basketItem, basketCount } = useSelector((state) => state.basket);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(setBasketOpen(!basketOpen));


    console.log(basketItem);
    let filteredArr = basketItem?.reduce((acc, current) => {

        const x = acc?.find(item => item.id === current.id);
        if (!x) {
            return acc?.concat([current]);
        } else {
            return acc;
        }
    }, [])
    console.log(filteredArr);

    const handleDelete = (item) => {
        dispatch(removeItemFromBasket(item))
        console.log("delete");
    }
    const handleClear = () => {
        dispatch(clearAll())
    }
    const handleIncrease = (item) => {
        dispatch(setBasketItem(item))
        dispatch(setBasketCount())
    }
    const handleDecrease = (item) => {
        console.log(basketItem?.findIndex((i) => i === item));
        let index = basketItem?.findIndex((i) => i === item)
        console.log(index);

        dispatch(clearAll())
        console.log(basketItem)
        dispatch(setBasketDecrease(...([...basketItem]?.splice(index, 1))))
        console.log(basketItem)
        dispatch(setBasketCount())

    }
    // console.log((basketItem?.reduce((acc, current) => acc + current?.price, 0)));
    console.log(basketItem)
    return (
        <div>
            <Modal
                open={basketOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div >
                        {

                            filteredArr?.map((item, index) => {

                                // console.log(item);
                                // console.log((basketItem?.filter((i) => i?.id === item?.id)));
                                // console.log((basketItem?.filter((i) => i?.id !== item?.id)));

                                return (<div style={{ display: "flex" }} key={index}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            alt={item?.title}
                                            height="100"
                                            image={item?.image}
                                            style={{ objectFit: "contain", background: "white", maxWidth: 70, minWidth: 70 }}
                                        />


                                    </Card>

                                    <Card sx={{
                                        width: 250,
                                        height: 120,
                                    }}

                                    >
                                        <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
                                            <div>
                                                <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                                                    {item?.title}
                                                </Typography>

                                                <Typography sx={{ fontSize: 14, color: "red", fontWeight: "bold" }} >
                                                    {item?.price} TL
                                                </Typography>
                                                <div style={{ fontSize: 12, color: "black", fontWeight: "bold", display: "flex", justifyContent: "flex-start" }} >

                                                    <TextField id="outlined-basic" variant="outlined" value={(basketItem?.filter((i) => i?.id === item?.id)).length}
                                                        size="small" />
                                                    <div>
                                                        <ArrowDropUpIcon style={{ height: "1rem" }} onClick={() => handleIncrease(item)} />
                                                        <ArrowDropDownIcon style={{ height: "1rem" }}
                                                            onClick={() => handleDecrease(item)} />
                                                    </div>


                                                </div>
                                            </div>
                                            <div>
                                                <DeleteForeverIcon
                                                    onClick={() => handleDelete(item)} />
                                            </div>

                                        </CardContent>

                                    </Card>



                                </div>)
                            })
                        }
                    </div>

                    <Typography id="modal-modal-description" sx={{ mt: 2, mr: 10 }} style={{ textAlign: "end" }}>
                        Subtotal({basketCount} items):{(basketItem?.reduce((acc, current) => acc + current?.price, 0)).toFixed(2)}TL
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                        <Button size="small" style={{ background: "orange", color: "white" }}>BUY NOW</Button>
                        <Button size="small" style={{ background: "grey", color: "black" }}
                            onClick={handleClear}>CLEAR CHART</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default BasketModal