import dotenv from 'dotenv';
dotenv.config();

import { MongoClient, ServerApiVersion } from 'mongodb';
import * as path from 'path';

// Import data from the frontend lib (TS files) via ts-node
import { categories, products } from '../src/lib/data';
import * as imagesModule from '../src/lib/images';
import * as fs from 'fs';

const uri = process.env.MONGODB_URI || "mongodb+srv://cryotechinfo_db_user:oGeoBpaITcdJOLwg@cluster0.vz9ekxi.mongodb.net/?appName=Cluster0";
const DB_NAME = process.env.DB_NAME || 'tech_accessories';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function seed() {
  try {
    await client.connect();
    const db = client.db(DB_NAME);

    console.log('Seeding categories...');
    await db.collection('categories').deleteMany({});
    await db.collection('categories').insertMany(categories as any[]);

    console.log('Seeding products...');
    // transform product images into full URLs using getProductImage
    const getProductImage = (imagesModule as any).getProductImage || ((n: string) => n);
    const productsToInsert = (products as any[]).map(p => ({
      ...p,
      imageKeys: p.images,
      images: (p.images || []).map((k: string) => getProductImage(k)),
    }));
    await db.collection('products').deleteMany({});
    await db.collection('products').insertMany(productsToInsert);

    console.log('Seeding images map...');
    // read images.ts source to extract the map object; execute module's map if available
    const imageEntries: { key: string; url: string }[] = [];
    if ((imagesModule as any).getProductImage) {
      // try to access the internal map by calling getProductImage on known keys from products
      const allKeys = new Set<string>();
      (products as any[]).forEach(p => (p.images || []).forEach((k: string) => allKeys.add(k)));
      allKeys.forEach(k => imageEntries.push({ key: k, url: (imagesModule as any).getProductImage(k) }));
    } else {
      // fallback: read the file and store as raw
      const imagesPath = path.resolve(__dirname, '../src/lib/images.ts');
      const raw = fs.readFileSync(imagesPath, 'utf8');
      await db.collection('metadata').updateOne({ name: 'images.ts' }, { $set: { content: raw } }, { upsert: true });
    }

    if (imageEntries.length) {
      await db.collection('images').deleteMany({});
      await db.collection('images').insertMany(imageEntries);
    }

    console.log('Saving types file as metadata...');
    const typesPath = path.resolve(__dirname, '../src/lib/types.ts');
    const typesRaw = fs.readFileSync(typesPath, 'utf8');
    await db.collection('metadata').updateOne({ name: 'types.ts' }, { $set: { content: typesRaw } }, { upsert: true });

    console.log('Seed completed successfully.');
  } catch (err) {
    console.error('Seed failed:', err);
  } finally {
    await client.close();
  }
}

seed();
