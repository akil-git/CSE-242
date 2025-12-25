const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://cryotechinfo_db_user:oGeoBpaITcdJOLwg@cluster0.vz9ekxi.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
let dbName = process.env.DB_NAME || 'tech_accessories';
let db;

async function run() {
  try {
    await client.connect();
    db = client.db(dbName);
    // Send a ping to confirm a successful connection
    await db.command({ ping: 1 });
    console.log('Connected to MongoDB, DB:', dbName);

    // Routes that use the DB
    app.get('/api/ping', (req, res) => res.json({ message: 'pong' }));

    app.get('/api/categories', async (req, res) => {
      try {
        const categories = await db.collection('categories').find({}).toArray();
        res.json(categories);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch categories' });
      }
    });

    app.get('/api/products', async (req, res) => {
      try {
        const q = {};
        if (req.query.categoryId) q.categoryId = String(req.query.categoryId);
        // basic search by name
        if (req.query.search) q.name = { $regex: String(req.query.search), $options: 'i' };
        const products = await db.collection('products').find(q).toArray();
        res.json(products);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch products' });
      }
    });

    app.get('/api/products/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const product = await db.collection('products').findOne({ id: String(id) });
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json(product);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch product' });
      }
    });

    app.get('/api/images', async (req, res) => {
      try {
        const images = await db.collection('images').find({}).toArray();
        res.json(images);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch images' });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

  } catch (err) {
    console.error('MongoDB connection failed:', err);
    process.exit(1);
  }
}

run().catch(console.dir);
