import React from 'react';
import { useHistory } from 'react-router';
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import LoginForm from './LoginForm';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 80,
    paddingTop: 80
  },
  backButton: {
    marginLeft: theme.spacing(2)
  },
  card: {
    overflow: 'visible',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: theme.spacing(2, 2, 2, 2)
  },
  icon: {
    backgroundColor: colors.green[500],
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
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
}));

function LoginView() {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmitSuccess = () => {
    history.push('/app');
  };

  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Container maxWidth="md">
        <Card className={classes.card}>
          <CardContent className={classes.content}>
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
            <Typography
              variant='body2'
              color="textSecondary"
              style={{textAlign:"center", fontStyle:"italic"}}
            >
              SUN - BY THE PALLET OR BUY THE TON
            </Typography>
              <LoginForm onSubmitSuccess={handleSubmitSuccess} />
          </CardContent>
          {/* <CardMedia
            className={classes.media}
            image="/static/images/auth.png"
            title="Cover"
          >
            <Typography
              color="inherit"
              variant="subtitle1"
            >
              Hella narvwhal Cosby sweater McSweeney&apos;s,
              salvia kitsch before they sold out High Life.
            </Typography>
            <Box
              alignItems="center"
              display="flex"
              mt={3}
            >
              <Avatar
                alt="Person"
                src="/static/images/avatars/avatar_2.png"
              />
              <Box ml={3}>
                <Typography
                  color="inherit"
                  variant="body1"
                >
                  Ekaterina Tankova
                </Typography>
                <Typography
                  color="inherit"
                  variant="body2"
                >
                  Manager at inVision
                </Typography>
              </Box>
            </Box>
          </CardMedia> */}
        </Card>
      </Container>
    </Page>
  );
}

export default LoginView;
