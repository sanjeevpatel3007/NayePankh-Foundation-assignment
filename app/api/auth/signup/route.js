import { NextResponse } from 'next/server';
import { signup } from '@/controllers/authController';
import dbConnect from '@/utils/dbConnect';
import upload from '@/lib/multer';

// Remove the deprecated config export
// The bodyParser is handled by Multer in the middleware

export async function POST(req) {
  try {
    await dbConnect();

    // Create a new Promise to handle file upload with Multer
    return new Promise((resolve, reject) => {
      upload.single('profileImage')(req, {}, async (err) => {
        if (err) {
          return resolve(NextResponse.json({ message: 'File upload failed', error: err.message }, { status: 400 }));
        }

        // Default profile image if none is uploaded
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
