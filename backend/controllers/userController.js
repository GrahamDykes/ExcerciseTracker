const User = require('../models/userModel')

//login user
const loginUser = async (req,res) => {

    res.json({msg:'Login User'})
}


//signup user

const signupUser = async (req,res) => {

    res.json({msg:'Signup User'})
}

module.exports = {signupUser, loginUser}