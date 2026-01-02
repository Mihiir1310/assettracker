// src/components/AssetForm.tsx
import React from "react";
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
}
