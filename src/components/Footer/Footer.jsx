import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link 
} from "@mui/material";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailIcon from '@mui/icons-material/Mail';
import RoomIcon from '@mui/icons-material/Room';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook'; 



const Footer = () => {
    return (<>
        <Grid container direction="row" spacing={1} sx={{ minHeight: "212px" }} style={{ backgroundColor: "warning.main" }}>
            <Grid container sm={4} xs={12} direction="column" alignContent="center">
                <Typography color="#ffffff" >
                    <h3 >CONTACT</h3>
                    <p><MailIcon /> fakeshop@gmail.com</p>
                    <p><AddIcCallIcon /> +12 3456 789</p>
                    <p><RoomIcon /> 3.Street in Newyork</p>
                </Typography>
            </Grid>

            <Grid container sm={4} xs={12} direction="column" alignContent="center" >
                <h3 style={{ marginBottom: "1rem", color: "#ffffff" }}>LEGAL & COOKIES</h3>
                <Link href="#" underline="none" style={{ marginBottom: "1rem", color: "#ffffff" }}>Privacy Policy</Link>
                <Link href="#" underline="none" style={{ marginBottom: "1rem", color: "#ffffff" }}>Terms of Service</Link>
                <Link href="#"  underline="none" style={{  marginBottom: "1rem",color: "#ffffff" }}>Do not sell my personal information</Link>
            </Grid>

            <Grid container sm={4} xs={12} direction="column" alignItems="center">
                <h3 style={{ color: "#ffffff" }} >FOLLOW US</h3> 
                <InstagramIcon  style={{ color: "#ffffff" }}  /> 
                <TwitterIcon  style={{ color: "#ffffff" }}/> 
                <FacebookIcon  style={{ color: "#ffffff" }}/>
            </Grid>
        </Grid>
        <AppBar position="static" elevation={0} component="footer" color="default" >
            <Toolbar style={{ justifyContent: "center", alignItems: "center", minHeight: "20px" }}>
                <Typography variant="caption">FakeShop ©2020</Typography>
            </Toolbar>
        </AppBar>
    </>
    )
}
export default Footer