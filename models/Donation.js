import mongoose from 'mongoose';

const DonationSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  campaignId: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  referralCodeUsed: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Donation || mongoose.model('Donation', DonationSchema);
