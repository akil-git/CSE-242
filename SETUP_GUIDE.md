# Tech Gear E-Commerce Setup Guide

This guide will help you set up and run the Tech Gear project on any laptop.

## Prerequisites

Before starting, ensure you have the following installed:

1. **Node.js** (v16 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version` and `npm --version`

2. **Git** (optional, for cloning the repository)
   - Download from: https://git-scm.com/

## Project Structure

```
CSE-242/
├── backend/              # Express.js backend server
│   ├── node_modules/
│   ├── .env             # Backend environment variables
│   ├── package.json
│   ├── server.js        # Main server file
│   ├── seed.js          # Database seeding script
│   └── tsconfig.json
├── src/                 # React frontend source
│   ├── components/      # React components
│   ├── lib/            # Utilities and types
│   ├── pages/          # Page components
│   └── styles/         # CSS styles
├── node_modules/
├── package.json        # Frontend dependencies
├── package-lock.json
├── vite.config.ts      # Vite configuration
└── README.md
```

## Installation Steps

### 1. Extract the Project

Save the project folder to your desired location (e.g., `C:\Projects\CSE-242`)

### 2. Install Frontend Dependencies

```bash
# Navigate to the project root
cd CSE-242

# Install npm packages
npm install
```

### 3. Install Backend Dependencies

```bash
# Navigate to backend folder
cd backend

# Install npm packages
npm install

# Return to root
cd ..
```

### 4. Configure Environment Variables

#### Backend Configuration

The backend requires a `.env` file with MongoDB credentials.

**Option A: Use the existing MongoDB (Recommended)**

If you're using the shared MongoDB instance:

```bash
# Create .env file in backend/ folder
cd backend
```

Create a file named `.env` with:
```
MONGODB_URI=mongodb+srv://cryotechinfo_db_user:oGeoBpaITcdJOLwg@cluster0.vz9ekxi.mongodb.net/?appName=Cluster0
DB_NAME=tech_accessories
PORT=5000
```

**Option B: Use your own MongoDB**

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a cluster and get your connection string
3. Create `.env` file with your credentials:
```
MONGODB_URI=your_mongodb_connection_string
DB_NAME=your_database_name
PORT=5000
```

#### Frontend Configuration (Optional)

If your backend runs on a different port or server, create a `.env.local` file in the root:

```
VITE_API_BASE_URL=http://localhost:5000/api
```

### 5. Seed the Database (First Time Only)

```bash
cd backend

# Run the seed script to populate MongoDB with sample data
npm run seed
# or
npx ts-node seed.ts
```

This will create:
- 6 product categories
- 12 sample products
- All product images and metadata

## Running the Project

### Start the Backend Server

```bash
cd backend
npm run dev
# or for production
npm start
```

The backend will start on `http://localhost:5000`

### Start the Frontend Development Server

In a **new terminal** (keep backend running):

```bash
npm run dev
```

The frontend will start on `http://localhost:3000` or `http://localhost:3001`

### Access the Application

Open your browser and go to:
- **http://localhost:3000** (or 3001 if port 3000 is in use)

## Important Notes

### Port Conflicts

If ports 3000/3001 or 5000 are already in use:

- **Frontend**: Vite will automatically try the next available port
- **Backend**: Change the PORT in `.env` (e.g., `PORT=5001`)

### MongoDB Connection Issues

If you see SSL errors when connecting to MongoDB:

1. Check your internet connection
2. Verify MongoDB credentials in `.env`
3. Ensure IP whitelist allows your connection in MongoDB Atlas
4. Try using the connection string without `retryWrites`:
   ```
   mongodb+srv://user:password@cluster.mongodb.net/dbname?retryWrites=false
   ```

### Development vs Production

**Development Mode:**
```bash
npm run dev     # Frontend (with hot reload)
npm run dev     # Backend (watches for changes)
```

**Production Build:**
```bash
# Frontend build
npm run build
npm run preview

# Backend
npm start
```

## Project Features

- ✅ Product catalog with multiple categories
- ✅ Product filtering and sorting
- ✅ Shopping cart functionality
- ✅ Wishlist management
- ✅ Product comparison
- ✅ Product detail pages
- ✅ Responsive design
- ✅ MongoDB backend integration

## API Endpoints

The backend provides these main endpoints:

- `GET /api/categories` - Get all categories
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get single product
- `GET /api/images` - Get image mappings
- `GET /api/ping` - Health check

## Troubleshooting

### Node modules issues

If you encounter any issues, try reinstalling dependencies:

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
rm -r node_modules package-lock.json

# Reinstall
npm install
```

### Port already in use

```bash
# Find process using port 3000
# On Windows:
netstat -ano | findstr :3000

# On Mac/Linux:
lsof -i :3000

# Kill the process (Windows):
taskkill /PID <PID> /F
```

### MongoDB connection fails

1. Check that the connection string is correct
2. Ensure you're connected to the internet
3. Add your IP address to MongoDB Atlas whitelist
4. Try connecting with MongoDB Compass using the same string

## Contact & Support

If you encounter issues, check:
1. Node.js version compatibility
2. MongoDB credentials and network access
3. Port availability
4. Environment variables are set correctly

---

**Last Updated:** December 2025
**Project Version:** 1.0.0
