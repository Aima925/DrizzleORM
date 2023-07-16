import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
 
const connectionString = "postgres://default:eWpML3RUN6ko@ep-billowing-leaf-589225.ap-southeast-1.postgres.vercel-storage.com/verceldb?sslmode=require"
const sql = postgres(connectionString, { max: 1 })
const db = drizzle(sql);
 
async function main() {
    await migrate(db, { migrationsFolder: "drizzle" });
}
main();