"use client";

import { useState } from "react";
import { loginAction } from "../action";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const [error, setError] = useState<string | undefined>(undefined);
  const router = useRouter();

  async function handleLogin(formData: FormData) {
    const res = await loginAction(formData);

    if (!res.success) {
      setError(res.error);
      return;
    }

    router.push("/dashboard");
  }

  return (
    
     <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center backdrop-opacity-10"
      style={{ backgroundImage: "url('/login-bg.jpg')" }}
    >
    <div className="h-screen w-full flex items-center justify-center ">
      <form
        action={handleLogin}
        className="bg-white shadow-md p-6 rounded-md flex flex-col gap-4 w-80"
      >
        <h2 className="text-xl font-semibold text-center">Login</h2>

        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="border p-2 rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
      </div>
    </div>
  );
}
