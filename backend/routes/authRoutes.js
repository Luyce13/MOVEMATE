const { Router } = require("express");
const router = Router();
const { signUp_post, login_post } = require("../controllers/authControllers");

router.post("/signUp", signUp_post);
router.post("/logIn", login_post);

module.exports = router;
