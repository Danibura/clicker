"use client";

import React from "react";
import { authClient } from "@/src/auth-client";
import Link from "next/link";
const Signup = () => {
  const signupWithEmail = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      callbackURL: "/",
    });
  };

  const signupWithGithub = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };

  const signupWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className=" flex flex-col">
        <h1 className="text-2xl font-semibold">Create an account</h1>
        <form action={signupWithEmail} className="flex flex-col gap-y-4 mt-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-b border-stone-700 p-2  mt-2"
          />

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
            Signup with email
          </button>
        </form>

        <div className="text-center mt-4 text-sm text-stone-700">
          Or continue with
        </div>
        <div className="flex flex-col items-center w-full">
          <button
            className="bg-stone-900 border border-stone-700 text-stone-200 p-2 rounded-lg mt-4 w-full "
            onClick={signupWithGithub}
          >
            Github
          </button>
        </div>
        <div className="flex flex-col items-center w-full">
          <button
            className="bg-stone-900 border border-stone-700 text-stone-200 p-2 rounded-lg mt-4 w-full "
            onClick={signupWithGoogle}
          >
            Google
          </button>
        </div>
        <div className="mt-4 text-stone-400 text-center flex flex-wrap justify-center">
          <div>Already have an account?</div>
          <Link href="/login" className="font-semibold px-2">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
