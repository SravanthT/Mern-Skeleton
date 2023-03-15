import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import config from './../../config/config';
import {expressjwt} from 'express-jwt';


const signin = async (req,res) =>{
    try{
        console.log(Object.keys(req.body), " This is in signin method server")
        let user = await User.findOne({
            'email':req.body.email
        })
        if(!user) 
            return res.status(401).json({
                error: "User not found"
            })
        if(!user.authenticate(req.body.password)){
            return res.status(401).send({
                error:"Email and password don't match."
            })
        }
        const token = jwt.sign({
            userId: user._id,
            email : user.email
        }, config.jwtSecret, {expiresIn: '1h'})

        

        return res.json({
            token,
            user:{
                userId: user._id,
                name : user.name,
                email: user.email
            }
        })

    } catch(err){
        return res.status('401').json({
            error:"Could not sign in"
        })
    }
}

const signout = (req,res) =>{
    res.clearCookie("t");
    return res.status('200').json({
        message:"signed out"
    })
}

const requireSignin = expressjwt({
    secret: config.jwtSecret,
    algorithms: ["HS256"],
    userProperty : 'auth'
})

const hasAuthorization = (req,res,next) =>{
    const token = req.headers.authorization?.split(" ")[1];
    

    // if(!authorized){
    //     return res.status('403').json({
    //         error: "User is not authorized"
    //     })
    // }
    // next()
    try{
        const authorized = jwt.verify(token,config.jwtSecret);
        console.log(authorized,token, "this is in has Authoriation method in server side")
        if(res)
        return res.json(authorized)
    }catch(err){
        const error = new Error(err)
        next (error)
    }
}

export default {signin, signout, requireSignin, hasAuthorization}