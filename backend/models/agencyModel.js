import mongoose from 'mongoose';

const agencySchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Address1: { type: String, required: true },
  Address2: [String], // Updated to an array of strings
  State: { type: String, required: true },
  City: { type: String, required: true },
  PhoneNumber: { type: String, required: true, unique: true }, // Added unique constraint
});

const Agency = mongoose.model('Agency', agencySchema);

export default Agency;
