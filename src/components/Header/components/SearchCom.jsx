import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../../features/searchSlice/searchSlice';
import { styled, alpha, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { setSortingList } from '../../../features/productSlice/productSlice';


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

const SearchCom = ({ productList, setFind, filteredList }) => {
    const dispatch = useDispatch();
    const { search } = useSelector((state) => state.search);
    let displayArray = (filteredList.length ? filteredList : productList)

    const handleSubmit = (e) => {
        dispatch(setSortingList([]))
        e.preventDefault()
        displayArray = displayArray.filter((item) => {
            return (
                item.title.toLowerCase().includes(search.toLowerCase()) === true
            )
        })
        dispatch(setFind(displayArray))
        dispatch(setSearch(""))
    }
    return (
        <Box sx={{ flexGrow: 1 }} onSubmit={handleSubmit} component="form" style={{ width: 200 }}>
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
    )
}

export default SearchCom