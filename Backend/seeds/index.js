const mongoose = require("mongoose");
const facility = require("./facility");
const Facility = require("../models/facility");

// console.log(typeof facility[0].url);
mongoose
  .connect(
    "mongodb+srv://E-revive:vRjgYnBPuc5l5aDP@cluster0.eowvofp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Mongo Connection open");
  })
  .catch((err) => {
    console.log("Mongo Error");
  });

const seedDB = async () => {
  await Facility.deleteMany({});
  for (let i = 0; i < 18; i++) {
    const Efacility = new Facility({
      name: `${facility[i].name}`,
      pinCode: facility[i].pinCode,
      type: "Point",
      coordinates: facility[i].coordinates,
      phoneNo: facility[i].phoneNo,
    });
    await Efacility.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
