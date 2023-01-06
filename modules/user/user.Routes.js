const router = require("express").Router()
const {signUp,signIn,getAllUsers} = require(`./controller/userController`)
router.post("/signUp",signUp)

router.post("/signIn",signIn)

router.get("/getAllUsers",getAllUsers)






module.exports = router;