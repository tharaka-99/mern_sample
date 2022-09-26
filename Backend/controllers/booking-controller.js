const Booking = require("../model/Booking");

//get all bookings
const getAllBooking = async (req, res, next) => {
  let booking;
  try {
    booking = await Booking.find();
  } catch (err) {
    console.log(err);
  }

  if (!booking) {
    return res.status(404).json({ message: "Nothing found" });
  }
  return res.status(200).json(booking);
};

//add booking
const addBooking = async (req, res, next) => {
  const { name, nic, bikeName, bikeId, date, start, end, description } =
    req.body;
  let booking;
  try {
    booking = new Booking({
      name,
      nic,
      bikeName,
      bikeId,
      date,
      start,
      end,
      description,
    });
    await booking.save();
  } catch (err) {
    console.log(err);
  }
  if (!booking) {
    return res.status(500).json({ message: "Unable to add" });
  }
  return res.status(201).json(booking);
};

//get books by id
const getById = async (req, res, next) => {
  const id = req.params.id;
  let booking;
  try {
    booking = await Booking.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!booking) {
    return res.status(404).json({ message: "No book found" });
  }
  return res.status(200).json(booking);
};

//update books
const updateBooking = async (req, res, next) => {
  const id = req.params.id;
  const { bikeName, bikeId, date, start, end, description } = req.body;
  let booking;
  try {
    booking = await Booking.findByIdAndUpdate(id, {
      bikeName,
      bikeId,
      date,
      start,
      end,
      description,
    });
    booking = await booking.save();
  } catch (err) {
    console.log(err);
  }
  if (!booking) {
    return res.status(404).json({ message: "Unable to Update by id" });
  }
  return res.status(200).json({ booking });
};

//delete books
const deleteBooking = async (req, res, next) => {
  const id = req.params.id;
  let booking;
  try {
    booking = await Booking.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!booking) {
    return res.status(404).json({ message: "Unable to Delete by id" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.addBooking = addBooking;
exports.getAllBooking = getAllBooking;
exports.getById = getById;
exports.updateBooking = updateBooking;
exports.deleteBooking = deleteBooking;
