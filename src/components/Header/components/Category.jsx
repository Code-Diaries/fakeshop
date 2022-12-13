import React from 'react' 
import {MenuItem, InputLabel,Select , FormControl, Typography, Box} from '@mui/material';  
import { useDispatch } from 'react-redux';

const Category = ({loadingCategory, errorCategory, categoryList, setChoosen, getFilter}) => {
const dispatch= useDispatch 
    const handleChange = (e) => {
        e.preventDefault()
        dispatch(setChoosen(e.target.value))
        dispatch(getFilter()) 
    }
  return (<>
    {errorCategory && (
        <Typography variant="h3" color="error" align="center" mt={20}>
            "error"
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
            <FormControl style={{ width: 500 }}>
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
  </> )
}

export default Category