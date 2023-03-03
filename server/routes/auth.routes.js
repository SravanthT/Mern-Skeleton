import express from 'express';
import authCtrl from '../controllers/auth.controller';

const router = express.Router();

router.route('/auth/signin')
    .post(authCtrl.signin)

router.route('/auth/signout')
    .get(authCtrl.signout)

router.all("*",(req,res)=>{
    res.status(404).send('404 not Found')
})

export default router