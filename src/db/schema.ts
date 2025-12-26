import { pgTable, integer, text, serial } from "drizzle-orm/pg-core";
export const users = pgTable("users" , {
    id: serial().primaryKey(),
    email: text().notNull().unique(),
    password: text().notNull()
})

