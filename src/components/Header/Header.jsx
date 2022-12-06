import * as React from 'react';
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, setProduct } from '../../features/productSlice/productSlice';
import { getCategory, setChoosen } from '../../features/categorySlice/categorySlice';
import { getFilter } from '../../features/filterSlice/filterSlice';



const Header = () => {
    const { productList, loading, error } = useSelector((state) => state.product);
    const { categoryList, choosen, loadingCategory, errorCategory } = useSelector((state) => state.category);
    const { filteredList, loadingFilter, errorFilter } = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct())
        dispatch(getCategory())
    }, [])

    const handleChange = (e) => {

        dispatch(setChoosen(e.target.value))
        dispatch(getFilter())
        console.log("here")




    }
    dispatch(setProduct(filteredList))


    console.log(categoryList)
    console.log(choosen);

    console.log(filteredList);
    console.log(productList);


    return (
        <>
            <>
                {errorCategory && (
                    <Typography variant="h3" color="error" align="center" mt={20}>
                        {error}
                    </Typography>
                )}
                {loadingCategory && (
                    <Box display="flex" alignItems="center" justifyContent="center">
                        loading
                    </Box>
                )}
                {!loadingCategory && (
                    <Box
                        xs={{ d: "flex" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-evenly"
                        flexWrap="wrap"
                    >

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Category"
                                onChange={handleChange}
                            >
                                {categoryList?.map((item, index) => (
                                    <MenuItem value={item} key={index}>{item}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                    </Box>
                )}
            </>

            <>
                {error && (
                    <Typography variant="h3" color="error" align="center" mt={20}>
                        {error}
                    </Typography>
                )}
                {loading && (
                    <Box display="flex" alignItems="center" justifyContent="center">
                        loading
                    </Box>
                )}
                {!loading && (
                    <Box
                        xs={{ d: "flex" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-evenly"
                        flexWrap="wrap"
                    >
                        {productList?.map((item, index) => (
                            <Card sx={{ maxWidth: 345, maxHeight: 700, minHeight: 700, margin: 2 }} key={index}>
                                <CardMedia
                                    component="img"
                                    alt={item?.title}
                                    height="250"
                                    image={item?.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {item?.title}
                                    </Typography>
                                    <Typography variant="body2" color="grey">
                                        {item?.description}
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
                        ))}
                    </Box>
                )}</>
        </>

    )
}

export default Header