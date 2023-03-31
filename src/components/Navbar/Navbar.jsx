import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Box, AppBar, Badge, Typography, MenuItem, Menu, Toolbar } from '@mui/material'; 
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setBasketOpen } from '../../features/basketSlice/basketSlice';
import { useDispatch } from 'react-redux';
import BasketModal from '../Header/components/BasketModal';
import { setFind } from '../../features/filterSlice/filterSlice';
import { setFinalList } from '../../features/productSlice/productSlice';
import SearchCom from '../Header/components/SearchCom';


const Navbar = () => {
  const { favoriteList } = useSelector(state => state.favorite)
  const { basketOpen, basketCount } = useSelector((state) => state.basket);
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(setBasketOpen(basketOpen));
  const handleClose = () => dispatch(setBasketOpen(!basketOpen));
  const { productList } = useSelector((state) => state.product);
  const { filteredList, find } = useSelector((state) => state.filter);

  let displayArray = (filteredList.length ? filteredList : productList)
  dispatch(setFinalList(find?.length ? find : displayArray))
  const navigate = useNavigate();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };



  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (

    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}

    >

      <MenuItem >
        <IconButton size="large" color="inherit" >
          <Badge color="error">
            <FavoriteBorderIcon onClick={() => navigate("/favoriteproduct")} />
          </Badge>
        </IconButton>
        <p onClick={() => navigate("/favoriteproduct")}>Favourites</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"

          color="inherit"
        >
          <Badge badgeContent={basketCount} color="error">
            <AddShoppingCartIcon
            />
          </Badge>
        </IconButton>
        <p>Basket</p>
      </MenuItem>
    </Menu>
  );


  return (
    <>
      <AppBar  position="static"
           style={{ position: 'fixed', top: 0 , left : 0,  margin: 0}} sx={{ bgcolor: "orange" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{ display: { xs: 'none', sm: 'block' } }}
            onClick={() => navigate("/")}
          >
            FAKESHOP
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <SearchCom productList={productList} filteredList={filteredList} setFind={setFind} />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge color="error">
                <FavoriteBorderIcon
                  onClick={() => {
                    if (favoriteList.length) {
                      navigate("/favoriteproduct")
                    } else {
                      alert("there is no favorite product to show")
                    }
                  }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <Badge badgeContent={basketCount} color="error">
                {/* burdaki badge contente state gelecek */}
                <AddShoppingCartIcon
                  onClick={handleOpen}
                  onClose={handleClose}
                />
              </Badge>
            </IconButton>
            <IconButton size="large"
              aria-label="show 17 new notifications"
              color="inherit">
              <LightModeIcon />
              {/* karanlıksa light mode aydılıksa dark mode ikon */}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <BasketModal />
    </>
  );
}
export default Navbar
