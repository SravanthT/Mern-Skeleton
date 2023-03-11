import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import auth from '../auth/auth-helper';
import { Link , useLocation, useNavigate } from 'react-router-dom';

const isActive = (path)=>{
    const location = useLocation();
    return location.pathname === path ? {color: '#ff4081'} : {color: '#ffffff'}
}

const Menu = () =>{
    const navigate = useNavigate();

    return(
    <AppBar position='static' >
        <Toolbar>
            <Typography variant='h6'  color='inherit'>
                MERN Skeleton
            </Typography>
            <Link to='/' >
                <IconButton aria-label='Home' style={isActive(history,'/')} >
                    <Home/>
                </IconButton>
            </Link>
            <Link to='/users'>
                <Button style={isActive('/users')} >Users</Button>
            </Link>
            {
                !auth.isAuthenticated() && (<span>
                    <Link to='/signup' >
                        <Button style={isActive("/signup")} >Sign up</Button>
                    </Link>
                    <Link to='/signin' >
                        <Button style={isActive(history,'/signin')} >Sign In</Button>
                    </Link>
                </span>)
            }
            {
                auth.isAuthenticated() && (<span>
                    <Link to={"/user/"+ auth.isAuthenticated().user._id} >
                        <Button style={isActive('/users' + auth.isAuthenticated().user_id)} >My Profile</Button>
                    </Link>
                    <Button 
                        color='inherit' 
                        onClick={()=>{
                        auth.clearJWT(()=> navigate('/'));
                    }} >Sign out</Button>
                </span>)
            }
        </Toolbar>
    </AppBar>
    )
}

export default Menu;