import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import kevin from '../images/Kevin.jpg';
import juan from '../images/juan.jpg';
import charles from '../images/charlie.jpg';
import Maegli from '../images/Maegli.png';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#282c34",
    height: "100%",
    marginTop: -225
  },
  cardContainer: {
    maxWidth: 325,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Kevin Cordón",
    description: `Kevin Cordón originario de Zacapa, se posicino entre los 4
    mejores atltlas del mundo en los pasados Juegos Olimpicos Tokyo 
    2020.
    Es considerado el mejor Badmintonista del continente`,
    image: kevin,
  },
  {
    name: "Juan Schaeffer",
    description: `Juan Ramon Schaeffer es un tirador deportivo guatemalteco. En 2019, ganó la medalla de plata en el evento de skeet masculino en los Juegos Panamericanos 2019 celebrados en Lima, Perú. `,
    image: juan,
  },
  {
    name: "Charles Fernández",
    description: `Charles Fernández es un pentatleta moderno guatemalteco. Compitió en los Juegos Olímpicos de Verano 2016 en el evento masculino y terminó decimoquinto.`,
    image: charles
  },
  {
    name: "Juan Maegli",
    description: `Juan Ignacio Maegli Agüero es un regatista guatemalteco, campeón nacional entre los años 1998 y 2000, campeón de los Juegos Panamericanos de Río de Janeiro 2007, Toronto 2015 y Lima 2019, además de campeón centroamericano y del Caribe de los Juegos de Mayagüez 2010, Veracruz 2014 y Barranquilla 2018.`,
    image: Maegli
  }

];

const Informacion = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justifyContent="center">
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="165"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={ project.link } target="_blank">
                  { project.enlace }
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Informacion;