import mongoose from 'mongoose';

const ReferralSchema = new mongoose.Schema({
  code: { type: String, unique: true, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  donations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Donation' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Referral || mongoose.model('Referral', ReferralSchema);
