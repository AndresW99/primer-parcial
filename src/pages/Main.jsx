import React from 'react';
import { Formulario } from '../components/Formulario';
import Informacion from '../components/informacion';
import { Navbar } from '../components/Navbar';
import { Saludo } from '../components/Saludo';

export const Main = () => {
    return (
        <>
            <Navbar />

            <Saludo />

            <Informacion />

            <Formulario />
        </>
    )
}
