import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  profileImage: { type: String, default: 'https://img.freepik.com/premium-vector/man-with-shirt-that-says-d-it_704913-37100.jpg' }, // Default image URL
  referralCode: { type: String, unique: true },
  donations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Donation' }],
  referrals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Referral' }],
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
