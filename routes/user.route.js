
const express = require("express");
const { getUser, getPost, putUser, deleteUser, userForm } = require("../controllers/user.controller");
const router = express.Router();


router.get("/",userForm);
router.get("/users",getUser);
router.post("/users",getPost);
router.put("/users/:id",putUser);
router.delete("/users/:id",deleteUser);



module.exports = router;