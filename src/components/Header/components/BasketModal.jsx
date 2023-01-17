import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { setBasketOpen } from '../../../features/basketSlice/basketSlice';
import { useSelector } from 'react-redux';

const style = {
    position: 'absolute',
    top: '18%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const BasketModal = () => {
    const { basketOpen, basketItem } = useSelector((state) => state.basket);
    const dispatch = useDispatch();
    const handleClose = () => dispatch(setBasketOpen(!basketOpen));

    return (
        <div>
            <Modal
                open={basketOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                        {
                            basketItem?.map((item, index) => {
                                <div style={{ display: "flex", justifyContent: "center" }} key={index}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            alt={item?.title}
                                            width="100"
                                            height="100"
                                            image={item?.image}
                                            style={{ objectFit: "contain", background: "white" }}
                                        />


                                    </Card>

                                    <Card sx={{
                                        width: 250,
                                        height: 100,
                                    }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 5 }} color="text.secondary" gutterBottom>
                                                {item?.title}
                                            </Typography>

                                            <Typography sx={{ fontSize: 7, color: "red", fontWeight: "bold" }} >
                                                {item?.price} TL
                                            </Typography>

                                        </CardContent>

                                    </Card>




                                </div>
                            })
                        }
                    </Typography> */}
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <Button size="small" style={{ background: "grey", color: "black" }}>ADD TO BASKET</Button>
                        <Button size="small" style={{ background: "orange", color: "white" }}>BUY NOW</Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default BasketModal