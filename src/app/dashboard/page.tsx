// src/app/dashboard/page.tsx
import React from "react";
import { readAssets } from "@/app/action";
import AssetCard from "@/components/AssetCard";
import AssetForm from "@/components/AssetForm";
import { Asset } from "@/types/asset";
import { cookies } from "next/headers";
import LogoutButton from "@/components/LogoutButton";

export default async function DashboardPage() {
  const assets: Asset[] = await readAssets();

  const cookiestore = cookies();
 const authEmail =  (await cookiestore).get("auth")?.value;
  const isAdmin = authEmail?.endsWith("@alphaware.com") ?? false;
  
  return (
    <section className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Manage Company Assets</h1>
        <p className="text-sm text-slate-600">
          Add, assign, unassign or delete assets here.
        </p>
      </div>

      <LogoutButton />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Asset list */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {assets.map((a) => (
              <AssetCard key={a.id} asset={a} isAdmin={isAdmin} />
            ))}
          </div>
        </div>

        {/* Asset creation form */}
        {isAdmin && (
        <aside>
          <AssetForm />
        </aside>
        )}
      </div>
    </section>
  );
}
