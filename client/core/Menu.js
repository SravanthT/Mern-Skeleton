import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import auth from '../auth/auth-helper';
import { Link , useLocation, useNavigate } from 'react-router-dom';

const IsActiveLink=({path,children})=>{
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        setIsActive(location.pathname === path);
    },[location.pathname,path]);

    return(
        <Button color='inherit' style={{...(isActive ? {color:'#ff4081'} : {color:'#ffffff'})}} >
            {children}
        </Button>
    )
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
                <IconButton aria-label='Home' >
                    <Home/>
                </IconButton>
            </Link>
            <Link to='/users'>
                <IsActiveLink path='/users'>Users</IsActiveLink>
            </Link>
            <div>
            {
                !auth.isAuthenticated() && (<span>
                    <Link to='/signup' >
                        <IsActiveLink path='/signup'>Sign up</IsActiveLink>
                    </Link>
                    <Link to='/signin' >
                        <IsActiveLink path='/signin'>Sign in</IsActiveLink>
                    </Link>
                </span>)
            }
            {
                auth.isAuthenticated() && (<span>
                    <Link to={"/user/"+ auth.isAuthenticated().user.userId} >
                        <IsActiveLink path={`/user/${auth.isAuthenticated().user.userId}`}>My Profile</IsActiveLink>
                    </Link>
                    <Button 
                        color='inherit' 
                        onClick={()=>{
                        auth.clearJWT(()=> navigate('/'));
                    }} >Sign out</Button>
                </span>)
            }
            </div>
        </Toolbar>
    </AppBar>
    )
}

export default Menu;