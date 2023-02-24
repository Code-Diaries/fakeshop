import * as React from 'react';
import { useState, memo } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { setSortingList } from '../../../features/productSlice/productSlice';

const PriceSorting = () => {
    const [option, setOption] = useState("")
    const { finalList, sortingList } = useSelector((state) => state.product);

    const dispatch = useDispatch();
    const handleChange = (e) => {
        if (e.target.value === "Featured") {
            dispatch(setSortingList(finalList))
        } else if (e.target.value === "Price: Low to High") {
            let descendingOrder = [...finalList.values()].sort((a, b) => a.price - b.price)
            dispatch(setSortingList(descendingOrder))

        } else if (e.target.value === "Price: High to Low") {
            let ascendingOrder = [...finalList.values()].sort((a, b) => b.price - a.price)
            dispatch(setSortingList(ascendingOrder))
        }
        setOption(e.target.value)
    };
    return (
        <FormControl style={{ width: "10rem" }}>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={option}
                label="Sort by"
                onChange={handleChange}
            >
                <MenuItem value="">  <em>None</em> </MenuItem>
                <MenuItem value={"Featured"} >Featured</MenuItem>
                <MenuItem value={"Price: Low to High"}>Price: Low to High</MenuItem>
                <MenuItem value={"Price: High to Low"}>Price: High to Low</MenuItem>

            </Select>
        </FormControl>
    )
}

export default memo(PriceSorting)