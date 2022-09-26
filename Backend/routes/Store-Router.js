const express = require("express");
const Store = require("../model/StoreModel");
const router = express.Router();
const StoreController = require("../controllers/storeController");

router.get("/", StoreController.getAllStores);
router.post("/", StoreController.addStores);
// router.get("/:id", StoreController.getById);
// router.put("/:id", StoreController.updateBooking);
router.delete("/:id", StoreController.deleteStore);

module.exports = router;
