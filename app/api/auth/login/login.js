import { NextResponse } from 'next/server';
import { login } from '@/controllers/authController';
import dbConnect from '@/utils/dbConnect';

export async function POST(req) {
  try {
    await dbConnect();

    const response = await login(req);
    return NextResponse.json(response, { status: response.status });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}
