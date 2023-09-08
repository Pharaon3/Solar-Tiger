import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Grid,
  Divider,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box : {
    display : "flex",
    justifyContent : "space-between",
    paddingTop : "13px",
  }
}));



function Hero() {
  const classes = useStyles();
  return (
           <Grid item md={6} xs={12} style={{marginBottom:"20px"}}>
                <Box style={{backgroundColor : "#2074a5", borderTopLeftRadius : "30px", borderTopRightRadius:"30px", paddingTop:"3px"}}>
                  <Typography variant='h4' style={{textAlign:"center", color:"white"}}>
                    Canadian Solar 450w Commercial Monofacail
                  </Typography>
                  <Typography variant='body2' style={{textAlign:"center"}} color='textSecondary'>
                    cs3w-450ms
                  </Typography>
                </Box>
                <Box style={{borderBottomLeftRadius : "30px", borderBottomRightRadius:"30px", backgroundColor:"white", padding:"13px"}}>
                <Box className={classes.box}>
                 <Typography variant='h1' style={{color : "#2074a5"}}>
                    $ 0.410
                  </Typography>
                  <Typography variant='h1' style={{color : "#2074a5"}}>
                    $ 0.425
                  </Typography>
                  <Typography variant='h1' style={{color : "#2074a5"}}>
                    15,980
                  </Typography>
                </Box>
                <Box display='flex' justifyContent='space-between' style={{ marginBottom : "13px"}}>
                 <Typography variant='h5' >
                    S/W CONTAINER
                  </Typography>
                  <Typography variant='h5' >
                    S/W PALLET
                  </Typography>
                  <Typography variant='h5' >
                    UNITS AVAIL
                  </Typography>
                </Box>
                <Divider  style={{backgroundColor:"grey"}}/>
                <Box className={classes.box}>
                 <Typography variant='body2' >
                    Silver / Black
                  </Typography>
                  <Typography variant='body2' >
                    144c I 31 / pallet
                  </Typography>
                  <Typography variant='body2' >
                    92.4Mw avail
                  </Typography>
                </Box>
                <Box display='flex' justifyContent='space-between' style={{ marginBottom : "13px"}}>
                 <Typography variant='body2' >
                    10 pallet MOQ
                  </Typography>
                  <Typography variant='body2' >
                    1600mm cable
                  </Typography>
                  <Typography variant='body2' >
                    In Stock - NJ
                  </Typography>
                </Box>
                <Box display='flex' justifyContent='space-between' style={{ marginBottom : "13px"}}>
                 <Button size='large' style={{color : "white", backgroundColor:"#2074a5"}} >
                    make offer
                  </Button>
                  <Button size='large' style={{color : "white", backgroundColor:"#2074a5"}} >
                    get spec
                  </Button>
                  <Button size='large' style={{color : "white", backgroundColor:"#2074a5"}} >
                    get quote
                  </Button>
                </Box>
                </Box>
           </Grid>
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
