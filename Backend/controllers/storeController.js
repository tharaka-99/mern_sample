const StoreSchema = require("../model/StoreModel");

//get all bookings
const getAllStores = async (req, res, next) => {
  let stores;
  try {
    stores = await StoreSchema.find();
  } catch (err) {
    console.log(err);
  }

  if (!stores) {
    return res.status(404).json({ message: "Nothing found" });
  }
  return res.status(200).json(stores);
};

//add booking
const addStores = async (req, res, next) => {
  const { name, discription, available, amount } = req.body;
  let store;
  try {
    store = new StoreSchema({
      name,
      available,
      amount,
      discription,
    });
    await store.save();
  } catch (err) {
    console.log(err);
  }
  if (!store) {
    return res.status(500).json({ message: "Unable to add" });
  }
  return res.status(201).json(store);
};

// //get books by id
// const getById = async (req, res, next) => {
//   const id = req.params.id;
//   let booking;
//   try {
//     booking = await Booking.findById(id);
//   } catch (err) {
//     console.log(err);
//   }
//   if (!booking) {
//     return res.status(404).json({ message: "No book found" });
//   }
//   return res.status(200).json(booking);
// };

// //update books
// const updateBooking = async (req, res, next) => {
//   const id = req.params.id;
//   const { bikeName, bikeId, date, start, end, description } = req.body;
//   let booking;
//   try {
//     booking = await Booking.findByIdAndUpdate(id, {
//       bikeName,
//       bikeId,
//       date,
//       start,
//       end,
//       description,
//     });
//     booking = await booking.save();
//   } catch (err) {
//     console.log(err);
//   }
//   if (!booking) {
//     return res.status(404).json({ message: "Unable to Update by id" });
//   }
//   return res.status(200).json({ booking });
// };

//delete books
const deleteStore = async (req, res, next) => {
  const id = req.params.id;
  let store;
  try {
    store = await StoreSchema.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!store) {
    return res.status(404).json({ message: "Unable to Delete by id" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.addStores = addStores;
exports.getAllStores = getAllStores;
// exports.getById = getById;
// exports.updateBooking = updateBooking;
exports.deleteStore = deleteStore;
