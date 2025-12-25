# Tech Gear - Quick Reference Card

## Installation (One-Time Setup)

### Windows
```bash
setup.bat
```

### Mac/Linux
```bash
chmod +x setup.sh
./setup.sh
```

### Manual
```bash
npm install
cd backend && npm install && cd ..
```

---

## Configuration

### Backend (.env file)
```bash
cd backend
cp .env.example .env
# Edit with your MongoDB URI
```

### Environment Variables
```
MONGODB_URI=your_connection_string
DB_NAME=tech_accessories
PORT=5000
```

---

## Running the Application

### Terminal 1 - Backend
```bash
cd backend
npm run dev
# Wait for: "Server listening on port 5000"
```

### Terminal 2 - Frontend
```bash
npm run dev
# Open: http://localhost:3000
```

---

## First Time - Seed Database

```bash
cd backend
npm run seed
```

---

## Common Commands

```bash
# Install all dependencies
npm install
cd backend && npm install && cd ..

# Start development
npm run dev           # Frontend
npm run dev           # Backend (in backend folder)

# Build for production
npm run build         # Frontend
npm start             # Backend (in backend folder)

# Seed database
cd backend && npm run seed

# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## Project Locations

| Item | Location |
|------|----------|
| Frontend Code | `src/` |
| Backend Code | `backend/` |
| Components | `src/components/` |
| Utilities | `src/lib/` |
| Configuration | `.env` files |
| Frontend API | `src/lib/api.ts` |
| Types | `src/lib/types.ts` |

---

## Key Ports

| Service | Port | URL |
|---------|------|-----|
| Frontend | 3000/3001 | http://localhost:3000 |
| Backend | 5000 | http://localhost:5000 |
| Database | N/A (Cloud) | MongoDB Atlas |

---

## API Endpoints

```
GET  /api/ping              Health check
GET  /api/categories        All categories
GET  /api/products          All products
GET  /api/products/:id      Single product
GET  /api/images            Image mappings
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Node not found" | Install Node.js from nodejs.org |
| Port in use | Change PORT in .env or kill process |
| MongoDB error | Check .env credentials |
| Npm error | `npm cache clean --force` and retry |
| Module not found | `npm install` in correct folder |

---

## File Transfer Checklist

✅ Include:
- src/
- backend/ (no node_modules)
- package.json files
- .env.example files
- SETUP_GUIDE.md
- This file!

❌ Exclude:
- node_modules/
- backend/node_modules/
- dist/
- .git/
- .env (with credentials)

---

## Environment Variables (.env)

### Backend Required
```
MONGODB_URI=mongodb+srv://user:pass@cluster.mongo.mongodb.net/?appName=Cluster0
DB_NAME=tech_accessories
PORT=5000
```

### Frontend Optional
```
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## Step-by-Step on New Laptop

1. Extract project ZIP
2. Run `setup.bat` or `./setup.sh`
3. Create `backend/.env` with MongoDB credentials
4. Run `npm run seed` in backend folder
5. Terminal 1: `cd backend && npm run dev`
6. Terminal 2: `npm run dev`
7. Open http://localhost:3000

---

## Full Documentation

- **SETUP_GUIDE.md** - Detailed setup instructions
- **TRANSFER_GUIDE.md** - Transfer to another laptop
- **DEPLOYMENT_CHECKLIST.md** - Pre-deployment verification
- **README.md** - Project overview

---

## Useful Links

- **Node.js:** https://nodejs.org/
- **MongoDB:** https://www.mongodb.com/
- **Vite:** https://vitejs.dev/
- **React:** https://react.dev/
- **Express.js:** https://expressjs.com/

---

**Quick Help?** Check README.md for more links and resources
