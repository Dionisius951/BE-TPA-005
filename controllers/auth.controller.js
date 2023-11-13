const jwt = require('jsonwebtoken');
const {User} = require("../models")

module.exports = {
  login: async (req, res) => {
    const userLogin = req.body 

    try {
      const user = await User.findOne({email: userLogin.email})
      if (!user) throw new Error("invalid user")
  
      console.log(user.password, userLogin.password);
      if (user.password !== userLogin.password) throw new Error("invalid user")
  
      const token = jwt.sign({id: user._id, email: user.email}, "testestestes")
  
      res.json({
        message: "login berhasil",
        userId: user.id,
        token,
      })
    } catch (error) {
      res.json(error.message)
    }
  },

  register: (req, res) => {
    
  }
}