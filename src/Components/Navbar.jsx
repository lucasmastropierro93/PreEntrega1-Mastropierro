import React, {useState} from 'react';
import { AppBar, Tabs, Tab, Toolbar, Typography, Button } from '@mui/material';
import logo from '../assets/img/logo-chico-01.png';
import CartWidget from './CartWidget';




const Navbar = () => {
    const [value, setValue] = useState();
    return(
<AppBar sx={{background:"#FFFFFF"}}>
    <Toolbar>
        <img src={logo} alt="imagen logo" width={'80px'} height={'60px'}/>
        <Typography>SHOP</Typography>
        <CartWidget/>
        <Tabs value={value} onChange={(e,value)=> setValue(value)} indicatorColor="secondary">
            <Tab label="Productos"/>
            <Tab label="Acerca de"/>
            <Tab label="Contacto"/>
        </Tabs>

        <Button sx={{marginLeft:"auto"}} variant="contained">Iniciar sesion</Button>
        <Button sx={{marginLeft:"10px"}} variant="contained">Registrarse</Button>
    </Toolbar>
</AppBar>
    );
};
export default Navbar;



