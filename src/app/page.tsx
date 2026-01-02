import React from "react";
import { readAssets } from "@/app/action";
import { Asset } from "@/types/asset";
import AssetCard from "@/components/AssetCard";

export default async function Page() {
  const assets: Asset[] = await readAssets();

  const isAdmin = false; // PUBLIC PAGE

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">
        Company assets (public)
      </h1>

      <p className="mb-4 text-sm text-slate-600">
        This is public-read information.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {assets.map((a) => (
          <AssetCard key={a.id} asset={a} isAdmin={isAdmin} />
        ))}
      </div>
    </section>
  );
}
