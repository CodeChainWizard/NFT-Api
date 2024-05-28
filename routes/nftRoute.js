const express = require("express");

const router = express.Router();
const controllers = require("../controllers/nftControllers.js");

router.route("/").get(controllers.getAllNFT).post(controllers.createNFT);
router
  .route("/:id")
  .get(controllers.getSingleNFT)
  .patch(controllers.updateNFT)
  .delete(controllers.deletedNFT);

module.exports = router;
