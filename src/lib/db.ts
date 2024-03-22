import { MongoClient, Collection, Db } from "mongodb";

async function connectToDatabase(cluster: string): Promise<Collection> {
  const uri: string = process.env.MONGODB_URI || "";
  const client: MongoClient = new MongoClient(uri);

  try {
    await client.connect();
    const database: Db = client.db();
    const collection: Collection = database.collection(cluster);
    return collection;
  } catch (error) {
    throw error;
  }
}

export default connectToDatabase;
