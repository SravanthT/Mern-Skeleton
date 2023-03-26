import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function DeleteUser(props) {
    const [open,setOpen] = useState(false);
    const [redirect,setRedirect] = useState(false);
    const navigate = useNavigate();
    
    if(redirect){
        navigate('/');
    }
    return ( <>
    <h1>This is Delet page where user deletes his data</h1>
    </> );
}

export default DeleteUser;