import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import olympic from '../images/olympics.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
      maxWidth: 120,
    },
  }));

export const Navbar = () => {

    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
     
                <Typography variant="h6" className={classes.title}>
                    Tokyo 2020
                </Typography>

                <Typography variant="h6" className={classes.title}>
                    <img src={olympic} alt="logo" className={classes.logo} />
                </Typography>

                <Typography variant="h6"> 
                    Guatemala
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
