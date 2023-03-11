import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import auth from '../auth/auth-helper';
import {read} from './api-user';

const useStyles = makeStyles(theme=>({
    root: theme.mixins.gutters({
        padding:theme.spacing(1),
        margin: theme.spacing(5),
    }),
    title:{
        margin:`${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    }
}))

function Profile() {
    const classes = useStyles();
    const [user,setUser] = useState({});
    const [redirectToSignin, setRedirectToSignin] = useState(false);

    useEffect(()=>{
        const abortController = new AbortController();
        const signal = abortController.signal;
        const jwt = auth.isAuthenticated();

        read({
            userId: match.params.userId
        },{t:jwt.token}, signal).then(data=>{
            if(data && data.error){
                setRedirectToSignin(true)
            }else 
            setUser(data);
        })

        return function cleanup(){
            abortController.abort()
        }
    },[match.params.userId])



    return ( 
        <>
        <Paper className={classes.root} elevation={4} >
            <Typography className={classes.title} variant='h6' > 
                Profile
            </Typography>
            <List dense>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <Person/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={user.name} secondary={user.email}></ListItemText>
                </ListItem>
                <Divider/>
                <ListItem  >
                    <ListItemText primary={"Joined: "+ (new Date(user.created)).toDateString()} />
                </ListItem>
            </List>
        </Paper>

        </>

     );
}

export default Profile;