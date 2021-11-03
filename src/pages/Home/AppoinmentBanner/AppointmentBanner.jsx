import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import bg from '../../../images/appointment-bg.png'
import doctor from '../../../images/doctor.png'
import { Button, Typography } from '@mui/material';
const appointBg ={
    background:`url(${bg})`,
    marginTop:'170px',
    backgroundColor:'rgba(42, 85, 102, 0.8)',
    backgroundBlendMode:'darken, lighten',
    marginBottom:'20px'
}
const AppointmentBanner = () => {
    return (
        <div>
            <Box style={appointBg}  sx={{ flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                    <img style={{objectFit:'contain', width:450, marginTop:'-100px'}} src={doctor} alt="" />
                    </Grid>
                    <Grid style={{display:'flex',  alignItems: 'center',  textAlign:'left'}} item xs={12} md={8}>
                    <Box >
                    <Typography sx={{  color:'white'}} variant="h6">
                            Appointment
                        </Typography>
                    <Typography sx={{ my:3, color:'white'}} variant="h4">
                           Make an Appointment
                           <br />
                           <span>
                               Today
                           </span>
                        </Typography>
                        <Typography sx={{ my:3,color:'white'}} variant="h6" style={{fontSize:"14px"}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur accusantium nulla voluptate dolor ullam ab consequatur animi non impedit. Itaque exercitationem eius voluptatem quod porro quibusdam numquam ratione est? Nihil!
                        </Typography>
                        <Button variant="contained">Appointement</Button>
                    </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;