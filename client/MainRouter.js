import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from './core/Home';

const MainRouter = () =>{
    return (
        <>
            <Home/>
            <Routes>
                <Route path="/" component={Home}/>
            </Routes>
        </>
    )
}

export default MainRouter;