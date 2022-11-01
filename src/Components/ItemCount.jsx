import React,{Component, useState} from 'react';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import SnackbarContent from '@mui/material/SnackbarContent';




const ItemCount = () =>{
    let [stock,setStock] = useState(20)
    let [numero,setNumero] = useState(0)
    function aumentar(){
        setNumero(numero + 1);
    }
    function disminuir(){
        setNumero(numero - 1);
    }


    return(

        <div>
            <SnackbarContent message={"Stock disponible:  " + stock} sx={{marginLeft:'50px', width:'100px'}}/>
            
            <ButtonUnstyled onClick={aumentar}>+</ButtonUnstyled>
            
            <h1>{numero}</h1>
            <ButtonUnstyled onClick={disminuir}>-</ButtonUnstyled>

        </div>
    );
    }



export default ItemCount;