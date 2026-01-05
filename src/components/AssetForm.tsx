// src/components/AssetForm.tsx
/*import React from "react";
import { createAssetAction } from "@/app/action";

export default function AssetForm() {
  return (
    <form action={createAssetAction} className="bg-white p-4 rounded shadow-sm space-y-3">
      <h3 className="font-semibold">Create New Asset</h3>

      <label className="block text-xs">
        Name
        <input
          name="name"
          required
          className="w-full mt-1 p-2 border rounded"
        />
      </label>

      <label className="block text-xs">
        Category
        <input
          name="category"
          required
          className="w-full mt-1 p-2 border rounded"
        />
      </label>

      <label className="block text-xs">
        Type
        <input
          name="type"
          required
          className="w-full mt-1 p-2 border rounded"
        />
      </label>

      <label className="block text-xs">
        Owner
        <input name="owner" className="w-full mt-1 p-2 border rounded" />
      </label>

      <label className="block text-xs">
        Serial
        <input
          name="serial"
          required
          className="w-full mt-1 p-2 border rounded"
        />
      </label>

      <label className="block text-xs">
        Status
        <select name="status" className="w-full mt-1 p-2 border rounded">
          <option value="available">Available</option>
          <option value="assigned">Assigned</option>
          <option value="maintenance">Maintenance</option>
          <option value="retired">Retired</option>
        </select>
      </label>

      <label className="block text-xs">
        Notes
        <textarea name="notes" className="w-full mt-1 p-2 border rounded" />
      </label>

      <button className="px-4 py-2 bg-green-600 text-white rounded">
        Create
      </button>
    </form>
  );
}*/

// src/components/AssetForm.tsx
import React from "react";
import { createAssetAction } from "@/app/action";

export default function AssetForm() {
  return (
    <div className="relative">
      {/* Gradient background glow */}
      <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-lg" />

      <form
        action={createAssetAction}
        className="relative bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl space-y-4 border border-white/40"
      >
        <h3 className="text-lg font-semibold text-gray-800">
          ✨ Create New Asset
        </h3>

        {/* Name */}
        <div>
          <label className="block text-xs font-medium text-gray-600">
            Asset Name
          </label>
          <input
            name="name"
            required
            placeholder="MacBook Pro"
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white/90 p-2.5 text-sm
                       focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition"
          />
        </div>

        {/* Category + Type */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-600">
              Category
            </label>
            <input
              name="category"
              required
              placeholder="Electronics"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm
                         focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600">
              Type
            </label>
            <input
              name="type"
              required
              placeholder="Laptop"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm
                         focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>
        </div>

        {/* Owner + Serial */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-600">
              Owner
            </label>
            <input
              name="owner"
              placeholder="IT Department"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-600">
              Serial Number
            </label>
            <input
              name="serial"
              required
              placeholder="MBP-2024-001"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
            />
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block text-xs font-medium text-gray-600">
            Status
          </label>
          <select
            name="status"
            className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm
                       focus:border-green-500 focus:ring-2 focus:ring-green-300 transition"
          >
            <option value="available">🟢 Available</option>
            <option value="assigned">🔵 Assigned</option>
            <option value="maintenance">🟠 Maintenance</option>
            <option value="retired">🔴 Retired</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-medium text-gray-600">
            Notes
          </label>
          <textarea
            name="notes"
            rows={3}
            placeholder="Optional notes..."
            className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 text-sm
                       focus:border-pink-500 focus:ring-2 focus:ring-pink-300 transition"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-xl bg-linear-to-r from-indigo-600 to-purple-600
                     px-4 py-2.5 text-sm font-semibold text-white
                     hover:from-indigo-700 hover:to-purple-700
                     active:scale-[0.98] transition-all shadow-md"
        >
          🚀 Create Asset
        </button>
      </form>
    </div>
  );
}

