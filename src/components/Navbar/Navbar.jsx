import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Box, AppBar, Badge, Typography, MenuItem, Menu, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Link from '@mui/material/Link'; 

 
const Navbar = () => { 
  const { favoriteList } = useSelector(state => state.favorite)  
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
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
          <Badge badgeContent={2} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Basket</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          onClick={() => navigate("/login")}

        >
          <AccountCircle onClick={() => navigate("/login")} />
        </IconButton>
        <p onClick={() => navigate("/login")}>LogIn</p>

      </MenuItem>
    </Menu>
  );


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "warning.main" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            sx={{ display: { xs: 'none', sm: 'block' } }}
            onClick={() => navigate("/")}
          >
            <Link href="/" underline="none">
              FAKESHOP
            </Link> 
          </Typography> 
          <Box sx={{ flexGrow: 1 }} />
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
              <Badge badgeContent={2} color="error">
                {/* burdaki badge contente state gelecek */}
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"

              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle onClick={() => navigate("/login")} />

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

    </Box>
  );
}
export default Navbar