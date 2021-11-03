import React from 'react';
import Typography from '@mui/material/Typography';
import { Card, CardContent, CardMedia,Grid } from '@mui/material';
const Service = ({name, description, img}) => {
    return (


            <Grid item xs={4} sm={4} md={4} >
                 <Card sx={{ minWidth: 275, border:0, boxShadow:'none' }}>
                    <CardContent>
                    <CardMedia
                        component="img"
                        style={{width:'auto', height:'100px', margin:'auto'}}
                        image={img}
                        alt="Paella dish"
                    />
                    <Typography sx={{my:2}} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    </CardContent>
                </Card>
            </Grid>
    );
};

export default Service;