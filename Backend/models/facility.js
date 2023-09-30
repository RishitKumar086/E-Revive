const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FacilitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ["Point"], // Only 'Point' type is allowed
    required: true,
  },
  coordinates: {
    type: [Number], // Array of two numbers [latitude,longitude]
    required: true,
    index: "2dsphere", // Create a 2dsphere index for geospatial queries
  },
  phoneNo: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Facility", FacilitySchema);
