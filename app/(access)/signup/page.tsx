"use client";

import { useState } from "react";

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

    try {
      const result = await createUser(
        { success: false, message: "" },
        formData
      );

      if (result.success) {
        setSuccess(true);
        setTimeout(() => {
          router.push("/login");
        }, 1500);
      } else {
        setError(result.message);
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
          <h1 className="text-4xl font-semibold mb-6">Sign Up</h1>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && (
            <p className="text-green-500 mb-4">
              Account created! Redirecting to login...
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
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <div className="text-lg mt-6 text-center">
          Already have an account?
          <Link href="/login" className="font-extrabold ml-2 text-amber-50">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
