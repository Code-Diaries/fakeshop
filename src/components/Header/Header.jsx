import * as React from 'react';
import { useEffect } from "react";
import {Box, Typography} from '@mui/material';
 import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../features/productSlice/productSlice';
import { getCategory, setChoosen } from '../../features/categorySlice/categorySlice';
import { getFilter, setFind } from '../../features/filterSlice/filterSlice';
import Category from './components/Category';
import Search from './components/Search';
import ProductItem from './components/ProductItem';


const Header = () => {
    const { productList, loading, error } = useSelector((state) => state.product);
    const { categoryList, loadingCategory, errorCategory } = useSelector((state) => state.category);
    const { filteredList, find, loadingFilter, errorFilter } = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    let displayArray = (filteredList.length ? filteredList : productList)


    useEffect(() => {
        dispatch(getProduct())
        dispatch(getCategory())

    }, [])


    return (
        <>
            <Search filteredList={filteredList} productList={productList} setFind={setFind} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Category getFilter={getFilter} loadingCategory={loadingCategory} setChoosen={setChoosen} categoryList={categoryList} errorCategory={errorCategory} />
            </div>

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
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    flexWrap="wrap"
                >
                    {(find?.length ? find : displayArray)
                        ?.map((item, index) => (
                            <ProductItem item={item} index={index} />
                        ))}
                </Box>
            )}
        </> 
    )
}

export default Header