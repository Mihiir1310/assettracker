"use client";

import { logoutAction } from "@/app/action";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">
        Logout
      </button>
    </form>
  );
}
