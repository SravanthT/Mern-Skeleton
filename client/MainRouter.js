import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from './core/Home';
import About from "./user/About";
import Signin from './auth/Signin';
import User from "./user/Users";
import Signup from "./user/Signup";
import Profile from "./user/Profile";
import Menu from './core/Menu';
import PrivateRoute from "./auth/PrivateRoute";
import EditProfileComp from "./user/EditProfile";
import DeleteUser from "./user/DeleteUser";


const MainRouter = () =>{
    return (
        <>
            <Menu />
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path='/signin' element={<Signin/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path="/about" element={<About/>} />
                <Route path='/users' element={<User/>}/>
                <Route element={ <PrivateRoute path="/user/edit/:userId" element={<EditProfileComp/>} />} />
                <Route path="/user/:userId" element={<Profile />}/>
                <Route path="/delete" element={<DeleteUser/>}/>
            </Routes>
        </>
    )
}

export default MainRouter;