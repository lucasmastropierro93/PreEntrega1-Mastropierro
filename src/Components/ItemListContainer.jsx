import React, { useState } from 'react';
import ItemCount from './ItemCount';
import Propiedades from './Propiedades';
import SnackbarContent from '@mui/material/SnackbarContent';



function ItemListContainer ({greeting}) {
    
    return(
        <div >
            <h2>{greeting}</h2>
        </div>
    );
}


export default ItemListContainer;