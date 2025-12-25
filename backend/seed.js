require('ts-node').register({ transpileOnly: true });
const dotenv = require('dotenv');
dotenv.config();

const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require('path');
const fs = require('fs');

const { categories, products } = require('../src/lib/data');
const imagesModule = require('../src/lib/images');

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
    await db.collection('categories').insertMany(categories);

    console.log('Seeding products...');
    const getProductImage = imagesModule.getProductImage || (k => k);
    const productsToInsert = products.map(p => ({
      ...p,
      imageKeys: p.images,
      images: (p.images || []).map(k => getProductImage(k)),
    }));
    await db.collection('products').deleteMany({});
    await db.collection('products').insertMany(productsToInsert);

    console.log('Seeding images map...');
    const imageEntries = [];
    if (imagesModule.getProductImage) {
      const allKeys = new Set();
      products.forEach(p => (p.images || []).forEach(k => allKeys.add(k)));
      allKeys.forEach(k => imageEntries.push({ key: k, url: imagesModule.getProductImage(k) }));
    } else {
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
