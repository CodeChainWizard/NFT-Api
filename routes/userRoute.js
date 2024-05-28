const express = require("express");
const controllers = require("../controllers/usersControllers");

const router = express.Router();

router.route("/").get(controllers.getAllUser).post(controllers.createUser);
router
  .route("/:id")
  .get(controllers.getSigleUser)
  .patch(controllers.UpdateUser)
  .delete(controllers.deleteUser);

module.exports = router;
