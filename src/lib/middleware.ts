'use server';

import { NextRequest, NextResponse } from 'next/server';

const authenticate = (req: NextRequest) => {
    const token = req.headers.get('Authorization')?.replace('Bearer ', '');

    // Your authentication logic here
    if (token === process.env.AUTH_TOKEN) {
        return NextResponse.next();
    }

    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
};

export { authenticate };