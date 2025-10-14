const express=require('express');
const {UserSignup, UserSignin, UserSignout}=require('../controllers/user.controller');
const router=express.Router();

router.post('/signIn',UserSignin);
router.post('/signUp',UserSignup);
router.post('/signOut',UserSignout);

module.exports=router;