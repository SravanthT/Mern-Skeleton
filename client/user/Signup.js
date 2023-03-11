import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {create} from './api-user'; 

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

const Signup= (props)=>{
    const classes = useStyles();
    const [values, setValues] = useState({
        name:'',
        password:"",
        email:"",
        open: false,
        error:''
    })

    const handleChange = name => event =>{
        setValues({...values,[name]:event.target.value})
    }

    function clickSubmit(){
        const user = {
            name:values.name || undefined,
            email: values.email || undefined ,
            password: values.password || undefined
        }
        
        create(user).then(data=>{
            console.log(data,user, " This is after create is called")
            if(data.error){
                setValues({...values,error:data.error})
            }else{
                setValues({...values,error:"",open:true})
            }
        })
        console.log(values,user)

    }
    const handleClose = (event,reason)=>{
        if(reason !== 'backdropClick'){
        setValues({...values, open:false});
        props.history.push("/signin")
        }
    }

    return(
        <div>            
            <Card className={classes.card} elevation={6} >
                <CardContent>
                    <Typography variant='h6'className={classes.title} >Sign Up</Typography>
                    <TextField 
                        id='name' 
                        label="Your Name" 
                        className={classes.textField} 
                        margin='normal' 
                        onChange={handleChange('name')} 
                    /> <br/>

                    <TextField 
                        id='email' 
                        label="Your Email address" 
                        className={classes.textField} 
                        type='email' 
                        margin='normal' 
                        onChange={handleChange('email')} 
                    /><br/>
                    <TextField 
                        id="password" 
                        label="Enter your Password" 
                        className={classes.textField} 
                        type='password' 
                        margin='normal' 
                        onChange={handleChange('password')} 
                    /><br/>
                    {
                        values.error && (
                            <Typography 
                                component='p' 
                                color='error' 
                                className={classes.error} >
                                {values.error}
                            </Typography>)
                    }
                </CardContent>
                <CardActions>
                    <Button 
                        color='primary' 
                        variant='contained'
                        className={classes.submit} 
                        onClick={()=>clickSubmit()} >
                    Create Account
                    </Button>
                </CardActions>
            </Card>
            <Dialog open={values.open} onClose={handleClose} >
                <DialogTitle>New Account</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        New account sucessfully created
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to='/signin'>
                        <Button color='primary' autoFocus='autoFocus' variant='contained' onClick={handleClose} >
                            Sign In
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Signup;