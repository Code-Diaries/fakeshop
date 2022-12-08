import { React, useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { getSelects, setChoosen } from '../features/selectSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';



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



export default function SearchAppBar() {

  const {selectList, loadingCategory, errorCategory , choosen} = useSelector((state) => state.selects);
  const dispatch = useDispatch();

  useEffect(() => {
      
      dispatch(getSelects());
    }, []);



  const handleChange = (e) => {
    e.preventDefault()
    dispatch(setChoosen(e.target.value))
    console.log(choosen)
  }


  return (
    <Box  >
      <AppBar position="static" sx={{ bgcolor: "grey"}}  >
        <Toolbar  sx={{justifyContent:"space-between" }}>
          <Search>
            <SearchIconWrapper>Azvb nm 
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <FormControl style={{ width: 300, }}>
              <InputLabel id="demo-simple-select-label" >Select Category</InputLabel>
                  <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select Category"
                      onChange={handleChange}
                      >
                      {selectList?.map((item, index) => (
                        <MenuItem value={item} key={index}>{item}</MenuItem>
                        ))}
                  </Select>
          </FormControl>
        </Toolbar>
      
      </AppBar>
    </Box>
  );
}
