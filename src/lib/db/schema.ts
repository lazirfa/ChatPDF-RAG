
import { pgTable, serial, text, timestamp, varchar, integer, pgEnum } from "drizzle-orm/pg-core";

export const userSystemEnum = pgEnum("user_system", ["user", "system"]);

export const chat = pgTable("chat", {
    id: serial("id").primaryKey(),
    pdfName: text("pdf_name").notNull(),
    pdfUrl: text("pdf_url").notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    userId: varchar('user_id', {length:256}).notNull(),
    fileKey: text('file_key').notNull(),
});

export const messages = pgTable("message", {
    id: serial("id").primaryKey(),
    chatId: integer("chat_id").references(() => chat.id).notNull(),
    content: text("content").notNull(),
    role: userSystemEnum("role").notNull(), // user or system
    createdAt: timestamp('created_at').notNull().defaultNow(),
});


