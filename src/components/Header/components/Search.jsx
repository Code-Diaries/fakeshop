import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, styled, alpha } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


const Search = ({ productList, filteredList, setFind ,search, setSearch}) => {
  const dispatch = useDispatch();
  let displayArray = (filteredList.length ? filteredList : productList)

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
  return (
    <Search onSubmit={handleSubmit} component="form">
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
  )
}

export default Search