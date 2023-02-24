import React, { useEffect, useState, memo } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory, setChoosen } from '../../../features/categorySlice/categorySlice';
import { getFilter } from '../../../features/filterSlice/filterSlice';
import Box from '@mui/material/Box';
import { setSortingList } from '../../../features/productSlice/productSlice';


const CategoryCom = () => {
    const [select, setSelect] = useState("");
    const dispatch = useDispatch();
    const { categoryList, loadingCategory } = useSelector((state) => state.category);
    const handleChange = (e) => {
        dispatch(setSortingList([]))
        e.preventDefault()
        dispatch(setChoosen(e.target.value))
        dispatch(getFilter())
        setSelect(e.target.value)
    }
    useEffect(() => {
        dispatch(getCategory())
    }, [])
    return (<>
        {!loadingCategory && (
            <Box
                xs={{ d: "flex" }}
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
                flexWrap="wrap"
            >
                <FormControl style={{ width: "12rem" }}>
                    <InputLabel id="demo-simple-select-label"
                    > Select Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label={select}
                        onChange={handleChange}
                        value={select}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {categoryList?.map((item, index) => (
                            <MenuItem value={item} key={index}>{item}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        )}
    </>)
}

export default memo(CategoryCom)