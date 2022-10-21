import React from 'react';
import SnackbarContent from '@mui/material/SnackbarContent';


function Propiedades(props) {
    return(
        <>
          <SnackbarContent message={props.primerEntrega} sx={{marginLeft:'50px', width:'100px'}}/>
          <br/>
          <SnackbarContent message={props.lista} sx={{marginLeft:'50px', width:'100px'}}/>
        </>
    );
}

Propiedades.defaultProps = {
  primerEntrega:"Bienvenido a mi 1er entrega.",
  segundaEntrega:"Bienvenido a mi 2da entrega.",
  otrasPropiedades:"",
  lista:"Aca va ir la lista de contenidos",
}


export default Propiedades;