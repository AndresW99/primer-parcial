import React from 'react';
import '../App.css';


import { makeStyles, 
         Card, 
         CardContent,
         Container, } from '@material-ui/core';

import { Contenido } from './Contenido';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: -200,
        marginLeft: 40,
        backgroundColor: '#99CAF3',
        width: 500,
    },
    media: {
        height: 160,
    }
});

export const Formulario = () => {

    const classes = useStyles();

    return (
        <div className="App-header">
            <Container maxWidth="sm">
                <Card className={ classes.root } variant="outlined">

                    <CardContent>
                        <Contenido />
                    </CardContent>

                </Card>
            </Container>
        </div>
    )
}
