import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid,
         Typography,
         Button,
         Card,
         CardMedia,
         CardContent,
         CardActions,
         CardActionArea 
} from '@material-ui/core';

import kevin from '../images/Kevin.jpg';
import juan from '../images/juan.jpg';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
    centrar: {
        alignItems: "center"
    }
  });

export const Cards = () => {

    const classes = useStyles();

    return (
        <div className={ classes.centrar }>
            <Grid container>

            <Grid item  xs={12} sm={6}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={kevin}
                        title="Kevin Cordon"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Kevin Cordón
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Kevin Cordón originario de Zacapa, se posicino entre los 4
                            mejores atltlas del mundo en los pasados Juegos Olimpicos Tokyo 
                            2020.
                            Es considerado el mejor Badmintonista del continente
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Me gusta
                        </Button>
                        <Button size="small" color="primary">
                        Quieres saber mas?
                        </Button>
                    </CardActions>
                </Card>
            </Grid>

                <Grid item  xs={12} sm={6}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={juan}
                            title="Kevin Cordon"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Juan Schaeffer
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Juan Ramon Schaeffer es un tirador deportivo guatemalteco. En 2019, ganó la medalla de plata en el evento de skeet masculino en los Juegos Panamericanos 2019 celebrados en Lima, Perú. 
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Me gusta
                            </Button>
                            <Button size="small" color="primary">
                            Quieres saber mas?
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
