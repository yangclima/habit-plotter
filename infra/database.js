import { Client } from "pg";

async function getNewClient() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();

  return client;
}

async function query(queryObject) {
  let client;

  try {
    client = await getNewClient();
    const result = await client.query(queryObject);
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await client.end();
  }
}

export default { getNewClient, query };
