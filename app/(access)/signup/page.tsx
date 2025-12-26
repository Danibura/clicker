
import React from "react";
import { createUser } from "@/actions";
import Link from "next/link";
const Page = async () => {
  return (
    <div className="items-center  min-h-screen align-center justify-center flex flex-col">
      <div className="border border-amber-50 p-10 rounded-xl">
        <form action={createUser}>
          <h1 className="text-4xl font-semibold">Signup</h1>
          <h3 className="text-2xl mt-7">Email</h3>
          <input
            type="text"
            name="email"
            className="border border-amber-50 mt-2 text-lg p-2 rounded-lg"
            placeholder="Password"
          />
          <h3 className="text-2xl mt-5">Password</h3>
          <input
            type="password"
            name="password"
            className="border border-amber-50 mt-2 text-lg p-2 rounded-lg"
            placeholder="Password"
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
      <div className="text-xl mt-6">
        Already have an account?
        <Link href="/login" className="font-extrabold ml-2">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Page;
