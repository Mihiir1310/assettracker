import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';


export async function POST(request: Request) {
const body = await request.json();
const { username } = body;
// mock: any username where includes "admin" is an admin
const isAdmin = typeof username === 'string' && username.includes('admin');
const res = NextResponse.json({ ok: true, isAdmin });
// set a mock cookie
res.cookies.set('asset-tracker-user', username || 'guest', { path: '/' });
return res;
}


export async function DELETE() {
const res = NextResponse.json({ ok: true });
res.cookies.delete('asset-tracker-user');
return res;
}


