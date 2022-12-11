import * as React from 'react';
import { useEffect } from "react"; 
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../features/productSlice/productSlice';
import { getCategory  } from '../../features/categorySlice/categorySlice';
import { setFind } from '../../features/filterSlice/filterSlice';
 import CardItem from './components/CardItem';
import SearchCom from './components/SearchCom';
import CategoryCom from './components/CategoryCom'; 

const Header = () => {
    const { productList, loading, error } = useSelector((state) => state.product); 
    const { filteredList, find, loadingFilter, errorFilter } = useSelector((state) => state.filter);
 
    const dispatch = useDispatch();
    let displayArray = (filteredList.length ? filteredList : productList) 
    
    useEffect(() => {
        dispatch(getProduct())
        dispatch(getCategory())

    }, []) 
 
      return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}> 
                <SearchCom productList={productList} filteredList={filteredList} setFind={setFind} /> 
                <CategoryCom />
             </div> 
            <>
                {(errorFilter.length ? errorFilter : error) && (
                    <Typography variant="h3" color="error" align="center" mt={20}>
                        {error}
                    </Typography>
                )}
                {(loadingFilter.length ? loadingFilter : loading) && (
                    <Box display="flex" alignItems="center" justifyContent="center">
                        loading
                    </Box>
                )}
                {!(loadingFilter.length ? loadingFilter : loading) && (
                    <Box
                        xs={{ d: "flex" }}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-evenly"
                        flexWrap="wrap"
                    >
                        {(find?.length ? find : displayArray)
                            ?.map((item, index) => (
                               <CardItem item={item} index={index} />
                            ))}
                    </Box>
                )}</>
        </> 
    )
}

export default Header