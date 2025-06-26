"use client";

import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SignInPage() {
  const [providers, setProviders] = useState<any>({});

  useEffect(() => {
    (async () => {
      const prov = await getProviders();
      setProviders(prov);
    })();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-sm w-full bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>

        {/* Credentials Login */}
        <form
          method="post"
          action="/api/auth/callback/credentials"
          className="space-y-4"
        >
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 border rounded"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
          >
            Sign in with Credentials
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 text-center text-sm text-gray-500">OR</div>

        {/* GitHub Login */}
        {providers?.github && (
          <button
            onClick={() => signIn("github")}
            className="w-full bg-black text-white px-3 py-2 rounded hover:bg-gray-900"
          >
            Sign in with GitHub
          </button>
        )}
      </div>
    </div>
  );
}
