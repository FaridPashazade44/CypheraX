import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        return NextResponse.json({ message: 'Comments retrieved successfully', comments: [] }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { postId, userId, content } = body;
        if (!postId || !userId || !content) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }
        return NextResponse.json({ message: 'Comment created successfully' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}