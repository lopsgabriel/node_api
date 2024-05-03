// db.js
import 'dotenv/config';
import postgres from 'postgres'

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project=${ENDPOINT_ID}`;

export const sql = postgres(URL, { ssl: 'require' }); 