import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Card from '@material-ui/core/Card';
// import CardContent from "@material-ui/core/CardContent";
import { CardMedia, CardContent, Card, Typography } from "@material-ui/core";
import unicornBikeImg from './../assets/images/unicornbike_11zon.jpg'

const useStyles = makeStyles(theme =>({
    card:{
        maxWidth:600,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    title:{
        padding : `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing}px`,
        color: theme.palette.openTitle
    },
    media:{
        minHeight: 400
    }
}))

export default function Home(){
    const classes = useStyles();
    return(
        <>
        <Card className={classes.card}>
            <Typography variant="h6" className={classes.title} >
            Home Page
            </Typography>
            <CardMedia className={classes.media} image={unicornBikeImg} title="Unicorn Bicycle"></CardMedia>
            <CardContent>
                <Typography variant="body2" component="p"> Welcome to the MERN skeleton home page</Typography>
            </CardContent>
        </Card>
        </>
    )
}