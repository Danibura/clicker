"use client";

import React from "react";
import { loginUser } from "@/actions";
import Link from "next/link";
import { useFormState } from "react-dom";
import Result from "@/components/Result";

const initialState = {
  success: false,
  message: "",
};

const Page = () => {
  const [state, formAction]= useFormState(loginUser, initialState);
  
  return (
    <div className="items-center  min-h-screen align-center justify-center flex flex-col">
      <div className="border border-amber-50 p-10 rounded-xl">
        <form action={formAction}>
          <h1 className="text-4xl font-semibold">Login</h1>
          <h3 className="text-2xl mt-7">Email</h3>
          <input
            type="text"
            name="email"
            className="border border-amber-50 mt-2 text-lg p-2 rounded-lg"
            placeholder="Password"
            required
          />
          <h3 className="text-2xl mt-5">Password</h3>
          <input
            type="password"
            name="password"
            className="border border-amber-50 mt-2 text-lg p-2 rounded-lg"
            placeholder="Password"
            required
          />
          <br />
          <button
            type="submit"
            className="bg-amber-50 text-stone-950 rounded-xl mt-10 font-bold px-8 py-4 text-xl cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
      <Result success={state.success} message={state.message} />
      <div className="text-xl mt-6">
        Don&apos;t have an account yet?
        <Link href="/signup" className="font-extrabold ml-2">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Page;
