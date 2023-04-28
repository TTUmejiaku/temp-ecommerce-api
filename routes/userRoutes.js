const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getSingerUser,
  showCurrentUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userControllers");
const {
  authenticateUser,
  authorizePermissions,
} = require("../middleware/authentication");

router
  .route("/")
  .get(authenticateUser, authorizePermissions("admin", "owner"), getAllUsers);

router.route("/showMe").get(authenticateUser, showCurrentUser);
router.route("/updateUser").patch(authenticateUser, updateUser);
router.route("/updateUserPassword").patch(authenticateUser, updateUserPassword);

router.route("/:id").get(authenticateUser, getSingerUser);

module.exports = router;
