import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { path } = await request.json();
    
    if(!path) {
        return NextResponse.json({ message: 'Imamge path is required'}, { status: 400 })
    }
}