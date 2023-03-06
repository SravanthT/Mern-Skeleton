import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from './core/Home';
import About from "./user/About";
import Signin from './auth/Signin';
import User from "./user/Users";


const MainRouter = () =>{
    return (
        <>
            <Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path='/signin' element={<Signin/>} />
                <Route path="/about" element={<About/>} />
                <Route path='/users' element={<User/>}/>
            </Routes>
        </>
    )
}

export default MainRouter;