import * as React from 'react';
import { useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct} from '../../features/productSlice/productSlice';
 import CardItem from './components/CardItem';
 import CategoryCom from './components/CategoryCom';
import PriceSorting from './components/PriceSorting';
import BasketModal from './components/BasketModal';


const Header = () => {
    const {  loading, error, finalList, sortingList } = useSelector((state) => state.product);
    const { loadingFilter, errorFilter } = useSelector((state) => state.filter);  
    const dispatch = useDispatch(); 

    useEffect(() => {
        dispatch(getProduct())  
    }, []) 
      return (
        <>
            <BasketModal />
            <Box display="flex" style={{ justifyContent: "left", marginTop: "8rem" }}>  
                    <CategoryCom />
                    <PriceSorting /> 
            </Box>
            <>
                {(errorFilter.length ? errorFilter : error) && (
                    <Typography variant="h3" color="error" align="center" mt={20}>
                        {error}
                    </Typography>
                )}
                {(loadingFilter.length ? loadingFilter : loading) && (
                    <Box display="flex" alignItems="center" justifyContent="center">
                        LOADİNG...
                    </Box>
                )}
                {!(loadingFilter.length ? loadingFilter : loading) && (
                    <Box
                        xs={12}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-evenly"
                        flexWrap="wrap"

                    >
                        {(sortingList?.length ? sortingList : finalList)
                            ?.map((item, index) => (
                                <CardItem item={item} index={index} />
                            ))}
                    </Box>
                )}</>
        </>
    )
}

export default Header