import React from 'react';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
return (
<div>
<div className="mb-6 flex items-center justify-between">
<h2 className="text-2xl font-semibold">My Asset Dashboard</h2>
<div className="text-sm text-slate-600">(Simulated private area)</div>
</div>
{children}
</div>
);
}