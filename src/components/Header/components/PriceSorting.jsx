import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setFinalList } from '../../../features/productSlice/productSlice';

const PriceSorting = () => {
    const { finalList } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        console.log(e.target.value)
        console.log(finalList)
        if (e.target.value === "Featured") {
            dispatch(setFinalList(finalList))
        } else if (e.target.value === "Price: Low to High") {

            let descendingOrder = [...finalList.values()].sort((a, b) => a.price - b.price)
            console.log(descendingOrder)
            dispatch(setFinalList(descendingOrder))
        } else if (e.target.value === "Price: High to Low") {

            let ascendingOrder = [...finalList.values()].sort((a, b) => b.price - a.price)
            console.log(ascendingOrder)
            dispatch(setFinalList(ascendingOrder))

        }
    };
    console.log(finalList)
    return (
        <FormControl style={{ width: "10rem" }}>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={price}
                label="Sort by"
                onChange={handleChange}
            >
                <MenuItem value={"Featured"} >Featured</MenuItem>
                <MenuItem value={"Price: Low to High"}>Price: Low to High</MenuItem>
                <MenuItem value={"Price: High to Low"}>Price: High to Low</MenuItem>

            </Select>
        </FormControl>
    )
}

export default PriceSorting