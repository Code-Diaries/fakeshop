import * as React from 'react';
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../features/productSlice/productSlice';
import { getCategory, setChoosen } from '../../features/categorySlice/categorySlice';
import { getFilter, setFind } from '../../features/filterSlice/filterSlice';
import { setSearch } from '../../features/searchSlice/searchSlice';
import { setFavorite, setFavoriteItem, setFavoriteList } from '../../features/favoriteSlice/favoriteSlice';
import { red } from '@mui/material/colors';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));




const Header = () => {
    const { productList, loading, error } = useSelector((state) => state.product);
    const { categoryList, loadingCategory, errorCategory } = useSelector((state) => state.category);
    const { filteredList, find, loadingFilter, errorFilter } = useSelector((state) => state.filter);
    const { search } = useSelector((state) => state.search);
    const { favorite, favoriteList, favoriteItem } = useSelector((state) => state.favorite);
    const dispatch = useDispatch();
    let displayArray = (filteredList.length ? filteredList : productList)



    useEffect(() => {
        dispatch(getProduct())
        dispatch(getCategory())

    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        dispatch(setChoosen(e.target.value))
        dispatch(getFilter())

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        displayArray = displayArray.filter((item) => {
            console.log(item.title);
            return (

                item.title.toLowerCase().includes(search.toLowerCase()) === true
            )
        })

        dispatch(setFind(displayArray))

    }
    const handleFavorite = (e) => {

        let data = (find?.length ? find : displayArray).filter((item) => {
            console.log(item.id);
            console.log(e.target.id);
            return (

                item.id === Number(e.target.id)
            )
        })


        dispatch(setFavoriteList([...favoriteList, {
            favoriteItems: data[0],
            favorite: true,
            favoriteId: data[0].id
        }]))
        data = []

        // favoriteList?.filter((i) => { i.favoriteId !== e.target.id })







    }


    console.log(productList);

    // console.log(search);
    // console.log(find)
    console.log(favoriteItem);
    console.log(favoriteList);


    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
                <div>
                    <Box sx={{ flexGrow: 1 }} onSubmit={handleSubmit} component="form" style={{ width: 500 }}>

                        <Search >
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search.."
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={(e) => dispatch(setSearch(e.target.value))}
                                value={search}
                            />
                        </Search>


                    </Box>
                </div>
                <div>
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
                </div>
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
                                <Card sx={{ maxWidth: 345, maxHeight: 550, minHeight: 550, margin: 2, position: "relative" }} key={index}>
                                    <div onClick={handleFavorite} style={{ position: "absolute", right: 0 }} >
                                        {favoriteList.length
                                            ? favoriteList.map((i) => {

                                                return (
                                                    ((i.favoriteId === item?.id) && (i.favorite === true)) ? <FavoriteRoundedIcon id={item?.id} />
                                                        : <FavoriteBorderRoundedIcon
                                                            id={item?.id} />
                                                )
                                            }) : <FavoriteBorderRoundedIcon
                                                id={item?.id} />}
                                    </div>

                                    <CardMedia
                                        component="img"
                                        alt={item?.title}
                                        height="250"
                                        image={item?.image}
                                        style={{ objectFit: "contain", width: 350, height: 250, }}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" minHeight={100}>
                                            {item?.title}
                                        </Typography>

                                        <Typography variant="h6" color="primary" height="35">
                                            Rate: {item?.rating?.rate}
                                        </Typography>
                                        <Typography variant="h3" color="orange" height="60">
                                            {item?.price} TL
                                        </Typography>
                                    </CardContent>
                                    <CardActions height="35">
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