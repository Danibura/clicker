"use client";
import React from "react";
import Image from "next/image";
import { authClient } from "@/src/auth-client";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {
  const { data: session, isPending, error, refetch } = authClient.useSession();
  useEffect(() => {
    if (!isPending && !session) redirect("/login");
  }, [session, isPending]);
  
  return (
    <div>
      <h1>Ciao</h1>
      {isPending && <p>Loading...</p>}
      {session ? <p>Logged in</p> : <p>Not logged in</p>}
    </div>
  );
}
