const express = require("express");
const Book = require("../model/Booking");
const router = express.Router();
const bookingController= require("../controllers/booking-controller.js");


router.get("/", bookingController.getAllBooking);
router.post("/",bookingController.addBooking);
router.get("/:id",bookingController.getById);
router.put("/:id",bookingController.updateBooking);
router.delete("/:id",bookingController.deleteBooking);

module.exports = router;  