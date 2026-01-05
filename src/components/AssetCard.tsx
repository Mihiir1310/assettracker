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

  const statusStyles: Record<string, string> = {
    AVAILABLE: "bg-green-100 text-green-700",
    ASSIGNED: "bg-yellow-100 text-yellow-700",
    REQUESTED: "bg-blue-100 text-blue-700",
    REJECTED: "bg-red-100 text-red-700",
    MAINTENANCE: "bg-orange-100 text-orange-700",
    RETIRED: "bg-slate-200 text-slate-700",
  };

  const statusIcon: Record<string, string> = {
    AVAILABLE: "🟢",
    ASSIGNED: "🔵",
    REQUESTED: "🟣",
    REJECTED: "🔴",
    MAINTENANCE: "🟠",
    RETIRED: "⚫",
  };

  return (
    <div className="relative group">
      {/* Gradient Glow */}
      <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-lg group-hover:opacity-30 transition" />

      <article className="relative bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-white/40
                          transition transform group-hover:-translate-y-1">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              {asset.name}
            </h3>
            <p className="text-xs text-gray-500">
              {asset.type} • {asset.serial}
            </p>
          </div>

          {/* Status Badge */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1
                        ${statusStyles[asset.status]}`}
          >
            {statusIcon[asset.status]} {asset.status}
          </span>
        </div>

        {/* Notes */}
        <p className="mt-3 text-sm text-gray-700">
          {asset.notes || "No notes provided"}
        </p>

        <p className="mt-2 text-xs text-gray-500">
          Owner: <span className="font-medium">{asset.owner}</span>
        </p>

        {/* USER ACTION */}
        {!isAdmin && asset.status === "AVAILABLE" && (
          <form action={requestAssetAction} className="mt-4">
            <input type="hidden" name="id" value={asset.id} />
            <button
              className="w-full rounded-lg bg-linear-to-r from-blue-600 to-indigo-600
                         px-3 py-2 text-sm font-medium text-white
                         hover:from-blue-700 hover:to-indigo-700
                         transition shadow"
            >
              📩 Request Asset
            </button>
          </form>
        )}

        {!isAdmin && isRequested && (
          <p className="mt-4 text-sm text-blue-700 font-medium">
            ⏳ Request Pending Approval
          </p>
        )}

        {/* ADMIN ACTIONS */}
        {isAdmin && (
          <div className="mt-4 flex flex-wrap gap-2">
            {isRequested && (
              <>
                <form action={approveAssetAction}>
                  <input type="hidden" name="id" value={asset.id} />
                  <button
                    className="rounded-lg bg-linear-to-r from-green-600 to-emerald-600
                               px-3 py-1.5 text-sm text-white hover:opacity-90 transition"
                  >
                    ✅ Approve
                  </button>
                </form>

                <form action={rejectAssetAction}>
                  <input type="hidden" name="id" value={asset.id} />
                  <button
                    className="rounded-lg bg-linear-to-r from-red-600 to-pink-600
                               px-3 py-1.5 text-sm text-white hover:opacity-90 transition"
                  >
                    ❌ Reject
                  </button>
                </form>
              </>
            )}

            <form action={deleteAssetAction}>
              <input type="hidden" name="id" value={asset.id} />
              <button
                className="rounded-lg bg-slate-800 px-3 py-1.5 text-sm text-white
                           hover:bg-slate-900 transition"
              >
                🗑 Delete
              </button>
            </form>
          </div>
        )}
      </article>
    </div>
  );
}
