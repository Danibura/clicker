"use client";

import React from "react";
import { authClient } from "@/src/auth-client";
import Link from "next/link";

const Login = () => {
  const loginWithGithub = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };

  const loginWithEmail = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await authClient.signIn.email({
      email: email,
      password: password,
      callbackURL: "/",
    });
  };

  const loginWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className=" flex flex-col">
        <h1 className="text-2xl font-semibold">Log into your account</h1>
        <form action={loginWithEmail} className="flex flex-col gap-y-4 mt-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-b border-stone-700 p-2  mt-2"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-b border-stone-700 p-2  mt-2"
          />

          <button
            type="submit"
            className="bg-stone-50 text-stone-800 p-2 rounded-lg"
          >
            Login with email
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-stone-700">
          Or continue with
        </div>
        <div className="flex flex-col items-center w-full">
          <button
            className="bg-stone-900 border border-stone-700 text-stone-200 p-2 rounded-lg mt-4 w-full "
            onClick={loginWithGithub}
          >
            Github
          </button>
        </div>
        <div className="flex flex-col items-center w-full">
          <button
            className="bg-stone-900 border border-stone-700 text-stone-200 p-2 rounded-lg mt-4 w-full "
            onClick={loginWithGoogle}
          >
            Google
          </button>
        </div>
        <div className="mt-4 text-stone-400 text-center flex flex-wrap justify-center">
          <div>Don&apos;t have an account?</div>
          <Link href="/signup" className="font-semibold px-2">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
