import type { Config } from "drizzle-kit";

export default {
    driver: "durable-sqlite",
    schema: "./src/lib/db/schema.ts",
} satisfies Config;