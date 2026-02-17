import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
 try {
 const body = await request.json();
 const { email, password, username } = body;
 if (!email || !password || !username) {
 return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
 }
 return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
 } catch (error) {
 return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
 }
}