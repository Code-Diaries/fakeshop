import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link,
    Box,
    FormControl,
    TextField,
    Button,
    Paper
} from "@mui/material";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MailIcon from '@mui/icons-material/Mail';
import RoomIcon from '@mui/icons-material/Room';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import ForwardIcon from '@mui/icons-material/Forward';
import { flexbox } from "@mui/system";



const Footer = () => {
        const [email, setEmail] = useState("")
        
        const handleChange = (e) => {
            setEmail(e.target.value)
         }
        const handleSubmit = () => {
            setEmail("")   
        }


    return ( <>
     <Paper>
        <Grid container justify="center" sx={{minHeight: "212px"}} style={{backgroundColor:"lightgrey"}}>

            <Grid item sm={3} xs={12} alignContent="flex-start">
                <Typography >
                            <h3 >CONTACT</h3>
                            <p><MailIcon/> fakeshop@gmail.com</p>
                            <p><AddIcCallIcon/> +12 3456 789</p>
                            <p><RoomIcon/> 3.Street in Newyork</p>
                </Typography>
            </Grid>

            <Grid item sm={3} xs={12}>
                <h3 style={{marginBottom:"1rem"}}>LEGAL & COOKIES</h3>
                <Box style={{marginBottom:"1rem"}}>
                    <Link href="#" style={{color:"black"}}>Privacy Policy</Link>
                </Box>
                <Box style={{marginBottom:"1rem"}}>
                    <Link href="#" style={{color:"black"}}>Terms of Service</Link>
                </Box>
                <Box>
                    <Link href="#" style={{color:"black"}}>Do not sell my personal information</Link>
                </Box>
            </Grid>

            <Grid item sm={3} xs={12}  >
                <Box><h3>FOLLOW US</h3></Box>
                <Box style={{display:"flex", flexDirection:"row",justifyContent:"center",alignContent:"center",margin:"0.5rem"}}> 
                    <Box><InstagramIcon/></Box>
                    <Box><Link href="https://www.instagram.com" style={{color:"black"}}>Instagram</Link></Box>
                </Box>
                <Box style={{display:"flex", flexDirection:"row",justifyContent:"center",alignContent:"center", margin:"0.5rem"}}>
                    <Box><TwitterIcon/></Box>
                    <Box><Link href="https://www.twitter.com" style={{color:"black",}} >Twitter</Link></Box>
                </Box>
                <Box style={{display:"flex", flexDirection:"row",justifyContent:"center", alignContent:"center"}}><FacebookIcon /><Link href="https://www.facebook.com" underline='none' style={{color:"black"}}>Facebook</Link>
                </Box>
            </Grid>

            <Grid item sm={3} xs={12} >
                <h5>Sign up and get 10% off your first order and for a chance to win a £250 gift card every month.</h5>
                <FormControl style={{display:"flex", flexDirection:"row",justifyContent:"center",alignContent:"center"}}>
                    <Box>
                        <TextField id="outliend" label="Your E-mail" size="small" variant="outlined" style={{width:"10rem", height:"3rem",marginRight:"0.2rem"}} value={email} onChange={handleChange} />
                    </Box>

                    <Box>
                        <Button type="Submit" variant="contained" style={{height:"2.4rem"}} onClick={handleSubmit}> <ForwardIcon/> </Button>
                    </Box>
                     
                </FormControl>
            </Grid>
            
        </Grid>
        </Paper>

        <AppBar position="static" elevation={0} component="footer" color="default" >
            <Toolbar style={{ justifyContent:"center", alignItems:"center", minHeight:"20px"}}>
                <Typography variant="caption">FakeShop ©2020</Typography>
            </Toolbar>
        </AppBar>
        </>
)}
export default Footer