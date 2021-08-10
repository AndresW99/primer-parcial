import React from 'react';
import '../App.css';

import { Box,
    CssBaseline,
    Grid,
    makeStyles,
    Typography 
} from '@material-ui/core';

import amarillo from '@material-ui/core/colors/yellow';
import blue from '@material-ui/core/colors/blue';
import cog from '../images/cog.jpg';

const useStyles = makeStyles((theme) => ({
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      margin: theme.spacing(1),
    },
    title: {
      color: amarillo,
      marginTop: 10
    },
    subtitle: {
      color: blue[300],
      textTransform: "uppercase",
    },
    typedContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "100vh",
      textAlign: "center",
      zIndex: 1,
    },
    img: {
      borderRadius: 30,
      width: 500,
    }
  }));

export const Saludo = () => {

    const classes = useStyles();

    return (
        <div className="App-header">
            <CssBaseline />
              <Box className={classes.typedContainer}>
                  <Grid container justifyContent="center">
                      <img
                        alt="Titulo"
                        src={cog}
                        className={ classes.img }
                      />
                  </Grid>
                  <Typography className={classes.title} variant="h4">
                      ¡¡Orgullo Guatemalteco!!
                  </Typography>

                  <Typography className={classes.subtitle} variant="h5">
                      Apoyemos al talento nacional!!
                  </Typography>
                  
              </Box>  
        </div>
    )
}
