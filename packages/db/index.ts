import { DB } from "./src/db/types";
import { createKysely } from "@vercel/postgres-kysely";

// I want to export a db object
export const db = createKysely<DB>();
