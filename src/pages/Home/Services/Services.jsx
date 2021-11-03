
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import { Container } from '@mui/material';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
            img: whitening
        }
    ]
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
            <Typography sx={{m:2, color:'info.main', fontWeight:'bold'}} variant="h6" component="div">
                    OUR SERVICES
             </Typography>
            <Typography sx={{m:2, fontWeight:'bold'}} variant="h4" component="div">
                   Service We Provide
             </Typography>
            <Grid  container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {services.map(({name, description, img}) => (
      
              <Service name={name}
                description={description}
                img={img}
                ></Service>
          ))}
        </Grid>
            </Container>
      </Box>
    );
};

export default Services;
// {
//     services.map(({name, description, img}) => <Service name={name}
//     description={description}
//     img={img}
//     ></Service>)
// }