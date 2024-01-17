import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  AgencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency', required: true },
  Name: { type: String, required: true },
  Email: { type: String, required: true, unique: true }, // Added unique constraint
  PhoneNumber: { type: String, required: true, unique: true }, // Added unique constraint
  TotalBill: { type: Number, required: true },
});

// Compound index to ensure uniqueness of Name and AgencyId combination
clientSchema.index({ Name: 1, AgencyId: 1 }, { unique: true });

const Client = mongoose.model('Client', clientSchema);

export default Client;
