"use server";

import { db } from "./src";
import { users } from "./src/db/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
export async function createUser(formData: FormData) {
  const email = formData.get("email")?.toString();

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email!))
    .limit(1);
  if (existingUser.length > 0) {
    return false;
  }

  const password = formData.get("password")?.toString();
  const hashedPassword = await bcrypt.hash(password!, 10);

  await db.insert(users).values({
    email: email!,
    password: hashedPassword,
  });
}

export async function loginUser(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const result = await db.select().from(users).where(eq(users.email, email!));
  const user = result[0];
  const validPassword = await bcrypt.compare(password!, user.password);
  if (validPassword) {
    console.log("Login successful");
  } else console.log("Invalid credentials");
}
