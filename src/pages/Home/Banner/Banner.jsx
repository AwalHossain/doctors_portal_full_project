import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Typography,Container} from '@mui/material';

const Banner = () => {
    const bannerBg ={
        background:`url(${bg})`,
        height:400
    }
    const itemCenter={
        display:'flex',
        // justifyContent:'flex-start',
        alignItems:'center',
        height:400
    }
    return (
        <div style={bannerBg}>
         <Container   sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid style={itemCenter} item xs={6} md={6}>
            <Box  sx={{textAlign:'left'}}>
            <Typography sx={{forntWeight:'bold'}} variant="h3">
            Your New Smile
            <br />
            Starts Here
            </Typography>
            <Typography variant="h6" sx={{fontWeight:200, fontSize:'16px', my:3}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ullam eius laborum impedit libero fugit consequatur dignissimos ipsa quod similique.
            </Typography>
            <Button variant="contained">Get Appoinment</Button>
            </Box>
          </Grid>
          <Grid style={itemCenter}  item xs={6} md={6}>
              <img style={{width:500}} src={img} alt="" />
          </Grid>
        </Grid>
      </Container>
        </div>
    );
};

export default Banner;