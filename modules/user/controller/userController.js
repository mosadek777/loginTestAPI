const userModel = require("../../../DB/userModel");

// !-----------------------------signUpModal------------------------------------------------
const signUp = async (req, res) => {
  try {
    const { userName, email, password, cPassword } = req.body;
    if (password == cPassword) {
      const addUser = await userModel.insertMany({
        userName,
        email,
        password,
        cPassword,
      });
      res.json({ message: `Done`, addUser });
    } else {
      res.json({ message: `Error .... password not match confirmed password` });
    }
  } catch (error) {
    res.json({ message: `Error .... email/username already exists` });
  }
};

// !-----------------------------End signUpModal------------------------------------------------

// ?-------------------------signInModal------------------------------------------------
const signIn = async (req, res) => {
  const {email,password}= req.body;
  try {
    const foundedUser = await userModel.findOne({email});
    if (foundedUser) {
      if (foundedUser.password  == password ) {
        res.json({ message:`welcome to our system`})
      }
      else 
      {
        res.json({ message: `Error.... invalid pass` });

      }
        
    }
  } catch (error) {
    res.json({ message: `Error...... `,error})
  }
}











const getAllUsers = async (req, res) => {
  const allUsers = await userModel.find({});
  res.json({ message: `done`, allUsers });
};

module.exports = {
  signUp,
  signIn,
  getAllUsers,
};
