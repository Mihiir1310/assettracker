import React from "react";
import { Asset } from "@/types/asset";
import {
  requestAssetAction,
  approveAssetAction,
  rejectAssetAction,
  deleteAssetAction,
} from "@/app/action";

type Props = {
  asset: Asset;
  isAdmin: boolean;
};

export default function AssetCard({ asset, isAdmin }: Props) {
  const isRequested = asset.status === "REQUESTED";
  
  return (
    <article className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-lg">{asset.name}</h3>
          <div className="text-xs text-slate-500">
            {asset.type} • {asset.serial}
          </div>
        </div>

        {/* STATUS BADGE */}
        <div>
          <span
            className={`px-2 py-0.5 rounded text-xs ${
              asset.status === "AVAILABLE"
                ? "bg-green-100 text-green-800"
                : asset.status === "ASSIGNED"
                ? "bg-yellow-100 text-yellow-800"
                : asset.status === "REQUESTED"
                ? "bg-blue-100 text-blue-800"
                : asset.status === "REJECTED"
                ? "bg-red-100 text-red-800"
                : "bg-slate-200 text-slate-700"
            }`}
          >
            {asset.status}
          </span>
        </div>
      </div>

      {/* USER REQUEST BUTTON */}
      {!isAdmin && asset.status === "AVAILABLE" && (
        <form action={requestAssetAction} className="mt-4">
          <input type="hidden" name="id" value={asset.id} />
          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
            Request
          </button>
        </form>
      )}

      {!isAdmin && isRequested && (
        <p className="text-yellow-700 text-sm mt-3">Request Pending…</p>
      )}

      {/* ADMIN OPTIONS */}
      {isAdmin && (
        <div className="mt-4 flex gap-2">

          {isRequested && (
            <>
              <form action={approveAssetAction}>
                <input type="hidden" name="id" value={asset.id} />
                <button className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                  Approve
                </button>
              </form>

              <form action={rejectAssetAction}>
                <input type="hidden" name="id" value={asset.id} />
                <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">
                  Reject
                </button>
              </form>
            </>
          )}

          {/* ADMIN CAN ALWAYS DELETE */}
          <form action={deleteAssetAction}>
            <input type="hidden" name="id" value={asset.id} />
            <button className="bg-slate-700 text-white px-3 py-1 rounded text-sm">
              Delete
            </button>
          </form>
        </div>
      )}

      <div className="mt-3 text-sm text-slate-700">{asset.notes || "—"}</div>
      <div className="mt-2 text-xs text-slate-500">Owner: {asset.owner}</div>
    </article>
  );
}
