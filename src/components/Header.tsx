import Link from 'next/link';
import React from 'react';


export default function Header() {
return (
<header className="bg-white shadow-sm">
<div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
<Link href="/" className="font-semibold text-lg">AssetTracker</Link>
<nav className="flex gap-4 items-center">
<Link href="/login" className="text-slate-700 hover:underline">Login</Link>
<Link href="/" className="text-slate-700 hover:underline">Public</Link>
<Link href="/dashboard" className="text-slate-700 hover:underline">Admin-Dashboard</Link>
</nav>
</div>
</header>
);
}