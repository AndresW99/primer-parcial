import React from 'react';
import Swal from 'sweetalert2';

import { makeStyles, 
    Typography, 
    TextField,
    Button} from '@material-ui/core';
import { Campos } from './Campos';

const useStyles = makeStyles({
    title: {
        fontSize: 32,
    },
    entrada: {
        marginBottom: 20,
        marginTop: 4
    },
});

export const Contenido = () => {

    // Prevenimos que recargue al pulsar enter
    const handleEnviar = (e) => {
        e.preventDefault();
        Swal.fire(
            'Gracias por apoyar!!',
            'Nuestro atletas te lo agradecen!!',
            'success'
        )
    }

    const classes = useStyles();

    return (
        <form autoComplete="off" onSubmit={ handleEnviar}>
            <div>

                <Typography className={ classes.title } color="textPrimary" align="center" gutterBottom >
                    Mandale un saludo a tu atleta favorito!!
                </Typography>

                <Typography variant="h5" component="h2" >
                    Ingresa tus datos:  
                </Typography>

                <TextField 
                    id="standard-basic standard-error" 
                    className={ classes.entrada } 
                    label="Tu nombre" 
                    margin="normal" 
                    fullWidth={true} 
                    // onChange={ }
                    name="name"
                />     

                <TextField 
                    id="standard-basic standard-error" 
                    className={ classes.entrada } 
                    label="Nombre del atleta" 
                    margin="normal" 
                    fullWidth={true} 
                    // onChange={ }
                    name="name"
                />     

                <TextField 
                    id="standard-basic standard-error" 
                    className={ classes.entrada } 
                    label="Manda tu saludo!!" 
                    margin="normal" 
                    fullWidth={true} 
                    // onChange={ }
                    name="name"
                    multiline
                    rows={4}
                    variant="outlined"
                />    

                <Campos />

                <Button 
                    variant="contained" 
                    fullWidth 
                    color="primary"
                    onClick={ handleEnviar }
                >
                Enviar
                </Button>
            </div>
        </form>
    )
}
