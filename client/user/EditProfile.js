import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import auth from '../auth/auth-helper';
import {read,update} from '../user/api-user';

const useStyles = makeStyles(theme=>({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5),
        paddingBottom: theme.spacing(2)
      },
      title: {
        margin: theme.spacing(2),
        color: theme.palette.protectedTitle
      },
      error: {
        verticalAlign: 'middle'
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300
      },
      submit: {
        margin: 'auto',
        marginBottom: theme.spacing(2)
      }
}))

function EditProfileComp() {
    const classes = useStyles();
    const {userId} = useParams;
    const [values,setValues] = useState({
        name:"",
        password:"",
        email:"",
        open:false,
        error:"",
        redirectToProfile:false
       })

    const clickSubmit=()=>{
        const jwt = auth.isAuthenticated()
            const user={
                name : values.name || undefined,
                email: values.email || undefined,
                password : values.password || undefined
            }
            update({
                userId: userId
            },{
                t: jwt.token
            }, user).then(data=>{
                if(data && data.error){
                    setValues({...values, error:data.error})
                }else{
                    setValues({...values, userId:data._id, redirectToProfile:true})
                }
            })
            
    }
    return ( <>
        <TextField id="multiline-flexible"
            label="About"
            multiline
            rows="2"
            value={values.about}
            />
    </> );
}

export default EditProfileComp;