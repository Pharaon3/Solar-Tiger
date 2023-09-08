import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  SvgIcon,
  Typography,
  makeStyles,
} from '@material-ui/core';
import {Share} from 'react-feather';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from 'src/actions/accountActions';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {},
  blueUnderline: {
    textDecoration: 'none', // Remove the default text underline
    borderBottom: '4px solid #0cb3e5', // Set the thickness and color of the underline
    display: 'inline', // Ensure the underline only applies to the text itself
    textAlign:"center",
    fontWeight : "bold",
    fontSize:"80px", 
    height:"103px"
  },
  subtext: {
    textAlign:"center"
  },
  share : {
    color:"white"
  }
}));


function Header({ invoice, className, ...rest }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      history.push('/');
    } catch (error) {
      enqueueSnackbar('Unable to logout', {
        variant: 'error'
      });
    }
  };

  return (
      <Box   
      className={clsx(classes.root, className)}
      {...rest}>
        <Box>
        <Box display='flex' justifyContent='center' >
          <Typography
            color="textPrimary"
            className={classes.blueUnderline}
          >
          1000
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' >
        <Typography
          variant='h2'
          color="textPrimary"
          className={classes.subtext}
        >
          CONTAINERS.COM
        </Typography>
        </Box>
        </Box>
        <Box style={{position:"absolute", top:"25px", right:"25px"}}>
         <SvgIcon className={classes.share}>
          <Share />
        </SvgIcon>
        <Typography variant='body2' style={{color:"white"}}>
          share
        </Typography>
        </Box>
        <Button variant='outlined' size='small' style={{position:"absolute", top:"25px", left:"25px"}} onClick={handleLogout}>
          logout
        </Button>
      </Box>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
