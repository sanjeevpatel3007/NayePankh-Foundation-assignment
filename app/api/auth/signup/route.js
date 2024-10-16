import { NextResponse } from 'next/server';
import { signup } from '@/controllers/authController';
import dbConnect from '@/utils/dbConnect';
import upload from '@/lib/multer';

export const config = {
  api: {
    bodyParser: false,  // Multer handles body parsing
  },
};

export async function POST(req) {
  try {
    await dbConnect();

    return new Promise((resolve, reject) => {
      upload.single('profileImage')(req, {}, async (err) => {
        if (err) {
          return resolve(NextResponse.json({ message: 'File upload failed', error: err.message }, { status: 400 }));
        }

        if (!req.file) {
          req.file = { path: 'https://img.freepik.com/premium-vector/man-with-shirt-that-says-d-it_704913-37100.jpg' };
        }

        try {
          const response = await signup(req);
          return resolve(NextResponse.json(response, { status: response.status }));
        } catch (error) {
          return resolve(NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 }));
        }
      });
    });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}
