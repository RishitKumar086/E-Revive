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
  coordinates: {
    type: [Number], // Array of two numbers [longitude, latitude]
    required: true,
    index: "2dsphere", // Create a 2dsphere index for geospatial queries
  },
});

module.exports = mongoose.model("Facility", FacilitySchema);
