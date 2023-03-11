import { Button, CardActions, CardContent, TextField, Typography, Card ,Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {signin} from './api-auth';

const useStyles = makeStyles( theme =>({
    card:{
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom:theme.spacing(2)
    },
    error:{
        verticalAlign: 'middle'
    },
    title:{
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle
    },
    textField :{
        marginLeft: theme.spacing(1),
        marginRight:theme.spacing(1),
        width:300
    },
    submit:{
        margin: 'auto',
        marginBottom: theme.spacing(2)
    }
}))

function Signin(props) {
    const classes = useStyles();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email:'',
        password: '',
        error:'',
        redirectToReferrer: false
    });
    
    const clickSubmit =() =>{
        console.log("Submit button in Signin component clicked")
        const user = {
            email : values.email || undefined,
            password : values.password || undefined
        }
        signin(user).then(data=>{
            if(data.error) setValues({...values,error:data.error});
            else {
                setValues({...values,error:'',redirectToReferrer:true})
                console.log('Signin successful!');
                navigate('/');

            }
        })
    }

    const handleChange = name => event =>{
        setValues({...values,[name]:event.target.value})
    }

    return ( <>
       
            <h1>Signup</h1>
            <Card className={classes.card} elevation={6}>
                <CardContent>
                    <Typography variant='h6' className={classes.title}> Sign In</Typography>
                    <TextField id='email' label="Email" type='email' className={classes.textField} onChange={handleChange('email')} margin="normal" /><br/>
                    <TextField id='password' type='password' label="Password" className={classes.textField} onChange={handleChange('password')} margin='normal' />
                    <br/> {
                        values.error && (<Typography component='p' color='error' >
                            <Icon color="error" className={classes.error}>error</Icon>
                            {values.error}
                        </Typography>)
                    }
                </CardContent>
                <CardActions>
                    <Button color="primary" varient="contained" className={classes.submit} onClick={clickSubmit} >Submit</Button>
                </CardActions>
            </Card>
        
    </> );
}

export default Signin;