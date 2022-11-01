import React from 'react';
import SnackbarContent from '@mui/material/SnackbarContent';


function Propiedades(props) {
  
    return(
      <div>
        <div>
            <SnackbarContent message={props.primerEntrega} sx={{width:'100px'}}/>
        </div>
          
          <div>
            <SnackbarContent message={props.lista} sx={{width:'100px'}}/>
          </div>
          <div>
              <SnackbarContent message={props.stock} sx={{width:'100px'}}/>
          </div>
          </div>
         
        
    );
}

Propiedades.defaultProps = {
  primerEntrega:"Bienvenido a mi 1er entrega.",
  segundaEntrega:"Bienvenido a mi 2da entrega.",
  otrasPropiedades:"",
  lista:"Aca va ir la lista de contenidos",
  stock:"Stock disponible:"
}


export default Propiedades;