import { createDonation } from '../../../controllers/donationController';
import dbConnect from '../../../utils/dbConnect';

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    return createDonation(req, res);
  }
  res.status(400).json({ message: 'Method not allowed' });
}
