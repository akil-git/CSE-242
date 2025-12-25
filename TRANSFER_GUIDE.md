# Deployment and Transfer Guide

This guide explains how to transfer and run the Tech Gear project on another laptop.

## Quick Summary

To run this project on another laptop, you need:

1. ✅ **Node.js** installed (https://nodejs.org/)
2. ✅ **Project files** (entire CSE-242 folder)
3. ✅ **Environment variables** (.env file with MongoDB credentials)
4. ✅ **Internet connection** (to connect to MongoDB)

## Step-by-Step Transfer Process

### 1. Prepare Files for Transfer

**Do NOT include these folders** (they're large and unnecessary):
- `node_modules/` (will be reinstalled)
- `backend/node_modules/` (will be reinstalled)
- `.git/` (if using git)
- Build artifacts

**Do include:**
- `src/`
- `backend/`
- `package.json` files
- `vite.config.ts`
- `.env` (with credentials) or `.env.example`
- `SETUP_GUIDE.md`
- `setup.bat` or `setup.sh`
- All other source files

### 2. Compress and Transfer

**Option A: ZIP File (Recommended)**
```bash
# Windows (PowerShell)
$exclude = @('node_modules', '.git', 'dist', 'backend\node_modules')
Compress-Archive -Path CSE-242 -DestinationPath CSE-242.zip -Force

# Mac/Linux
zip -r CSE-242.zip CSE-242 -x "CSE-242/node_modules/*" "CSE-242/backend/node_modules/*" "CSE-242/dist/*"
```

**Option B: Cloud Storage**
- Upload to Google Drive, OneDrive, Dropbox, etc.
- Share the link with access permissions

**Option C: GitHub (If using version control)**
```bash
git clone <repository-url>
cd CSE-242
```

### 3. Set Up on New Laptop

#### Windows Users:
```bash
# Extract the ZIP file
# Navigate to the project folder
cd CSE-242

# Run the setup script
setup.bat

# OR manually:
npm install
cd backend
npm install
cd ..
```

#### Mac/Linux Users:
```bash
# Extract the ZIP file
cd CSE-242

# Make script executable
chmod +x setup.sh

# Run the setup script
./setup.sh

# OR manually:
npm install
cd backend
npm install
cd ..
```

### 4. Configure Environment Variables

**Copy the example to actual .env:**

```bash
# Backend
cd backend
cp .env.example .env
# Edit .env with your MongoDB credentials
```

**Update MongoDB URI if needed:**
- If using shared MongoDB: Use the provided credentials
- If using your own MongoDB: Add your connection string

### 5. Seed the Database (First Time Only)

```bash
cd backend
npm run seed
```

This populates the database with sample products.

### 6. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
npm run dev
# Frontend runs on http://localhost:3000
```

**Open in Browser:**
- http://localhost:3000

## Troubleshooting Transfer Issues

### Issue: "npm command not found"
**Solution:** Install Node.js from https://nodejs.org/
```bash
node --version   # Should show version
npm --version    # Should show version
```

### Issue: MongoDB connection fails
**Possible causes:**
1. Wrong credentials in `.env`
2. MongoDB Atlas IP whitelist (add your IP)
3. Firewall/Network issues
4. MongoDB cluster is down

**Solutions:**
```bash
# Verify connection string format
# Format: mongodb+srv://username:password@cluster.mongodb.net/dbname

# Try with retryWrites disabled if issues persist
mongodb+srv://user:pass@cluster.mongodb.net/dbname?retryWrites=false

# Test connection with MongoDB Compass
# Download: https://www.mongodb.com/products/tools/compass
```

### Issue: Port 3000 or 5000 already in use
**Solution:** Change the port in environment or kill the process

```bash
# Windows - Find and kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>

# Or change port in .env
PORT=5001  # in backend/.env
VITE_API_BASE_URL=http://localhost:5001/api  # in .env.local
```

### Issue: Dependencies installation fails
**Solution:** Clear cache and reinstall

```bash
npm cache clean --force
rm -r node_modules package-lock.json  # or delete manually
npm install
```

## Files You'll Need to Transfer

### Essential Files
```
CSE-242/
├── src/                    # React source code
├── backend/
│   ├── server.js
│   ├── seed.ts
│   ├── seed.js
│   ├── tsconfig.json
│   ├── package.json
│   └── .env (IMPORTANT!)
├── package.json
├── package-lock.json
├── vite.config.ts
├── index.html
├── .env (if exists)
├── SETUP_GUIDE.md
├── setup.bat
└── setup.sh
```

### Optional but Recommended
```
├── README.md
├── Attributions.md (if exists)
└── public/ (if exists)
```

### Do NOT Transfer
```
node_modules/              # Too large, will be reinstalled
backend/node_modules/      # Too large, will be reinstalled
.git/                     # Version control (clone fresh if needed)
dist/                     # Build artifacts
.DS_Store                 # Mac system files
Thumbs.db                 # Windows system files
```

## File Size Comparison

| Directory | Size | Needed |
|-----------|------|--------|
| `src/` | ~5 MB | ✅ Yes |
| `backend/` (src) | ~1 MB | ✅ Yes |
| `node_modules/` | ~500 MB | ❌ No (reinstalled) |
| `backend/node_modules/` | ~300 MB | ❌ No (reinstalled) |
| **Total to transfer** | ~10 MB | ✅ |

## Quick Reference

### On Source Laptop (Saving)
```bash
# Verify it works
npm run dev          # Terminal 1
cd backend && npm run dev  # Terminal 2

# Create archive for transfer
zip -r CSE-242.zip CSE-242 -x "*/node_modules/*"
```

### On New Laptop (Loading)
```bash
# Extract
unzip CSE-242.zip
cd CSE-242

# Install and configure
npm install
cd backend && npm install && cd ..

# Copy .env (get credentials from source machine)
cp backend/.env.example backend/.env
# Edit backend/.env with MongoDB credentials

# Run
cd backend && npm run dev  # Terminal 1
# In new terminal:
npm run dev           # Terminal 2

# Open http://localhost:3000
```

## Alternative: Docker Deployment

For easier deployment, you can use Docker:

```dockerfile
# Dockerfile (create in project root)
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000 5000

CMD ["sh", "-c", "cd backend && npm start & npm run preview"]
```

Build and run:
```bash
docker build -t tech-gear .
docker run -p 3000:3000 -p 5000:5000 --env-file .env tech-gear
```

## Support

For detailed setup instructions, see: `SETUP_GUIDE.md`

Questions? Check MongoDB documentation: https://docs.mongodb.com/
Need Node help? See: https://nodejs.org/docs/

---

**Created:** December 2025
**Project:** Tech Gear E-Commerce
**Version:** 1.0.0
