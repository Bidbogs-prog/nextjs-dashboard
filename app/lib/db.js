// import { Pool } from "pg";

// export const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });

// if you want to revert => uncomment above lines and change file extension to .ts
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;
export const sql = postgres(connectionString);
