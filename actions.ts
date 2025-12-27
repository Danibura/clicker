"use server";

import { db } from "./src";
import { users } from "./src/db/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

interface AuthState {
  success: boolean;
  message: string;
}
export async function createUser(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = formData.get("email")?.toString();

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email!))
    .limit(1);
  if (existingUser.length > 0) {
    return { success: false, message: "User already exists" };
  }

  const password = formData.get("password")?.toString();
  const hashedPassword = await bcrypt.hash(password!, 10);

  await db.insert(users).values({
    email: email!,
    password: hashedPassword,
  });

  console.log(email, password, "CIao");

  return { success: true, message: "User created successfully" };
}

export async function loginUser(
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const result = await db.select().from(users).where(eq(users.email, email!));
  const user = result[0];
  const validPassword = await bcrypt.compare(password!, user.password);
  if (validPassword) {
    return { success: true, message: "Login successful" };
  } else return { success: false, message: "Invalid credentials" };
}
