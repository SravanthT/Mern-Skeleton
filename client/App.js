import React from 'react';
import MainRouter from './MainRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import {hot} from 'react-hot-loader';

const App = () =>{
    return( 
        
            <ThemeProvider theme={theme}>
                <Router>
                    <MainRouter/>
                </Router>
            </ThemeProvider>
    )
}

export default hot(module) (App);