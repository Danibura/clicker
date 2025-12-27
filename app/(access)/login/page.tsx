"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.ok) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        setError("Invalid email or password");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="items-center min-h-screen align-center justify-center flex flex-col">
      <div className="border border-amber-50 p-10 rounded-xl w-96">
        <form onSubmit={handleSubmit}>
          <h1 className="text-4xl font-semibold mb-6">Login</h1>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && (
            <p className="text-green-500 mb-4">
              Login successful! Redirecting...
            </p>
          )}

          <h3 className="text-2xl mt-7">Email</h3>
          <input
            type="email"
            name="email"
            className="border border-amber-50 mt-2 text-lg p-2 rounded-lg w-full"
            placeholder="your@email.com"
            required
            disabled={loading}
          />

          <h3 className="text-2xl mt-5">Password</h3>
          <input
            type="password"
            name="password"
            className="border border-amber-50 mt-2 text-lg p-2 rounded-lg w-full"
            placeholder="Password"
            required
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-amber-50 text-stone-950 rounded-xl mt-8 font-bold px-8 py-3 text-xl cursor-pointer w-full disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-lg mt-6 text-center">
          Don&apos;t have an account yet?
          <Link href="/signup" className="font-extrabold ml-2 text-amber-50">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
