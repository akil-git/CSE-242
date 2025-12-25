# Deployment Checklist

Use this checklist before transferring the project to another laptop.

## Pre-Transfer Checklist

### Code & Files
- [ ] All source code in `src/` is complete
- [ ] Backend code in `backend/` is ready
- [ ] All configuration files present (`package.json`, `vite.config.ts`, etc.)
- [ ] No sensitive data in source code (hardcoded passwords, API keys)
- [ ] `.env.example` files created with safe defaults
- [ ] `README.md`, `SETUP_GUIDE.md`, and `TRANSFER_GUIDE.md` are up to date

### Testing (Run on Source Machine)
- [ ] Backend starts without errors: `cd backend && npm run dev`
- [ ] Frontend starts without errors: `npm run dev`
- [ ] Homepage loads at `http://localhost:3000`
- [ ] Can navigate to categories
- [ ] Can view products
- [ ] Cart, wishlist, and compare features work
- [ ] API calls are successful (check browser console)
- [ ] MongoDB connection works

### Database
- [ ] MongoDB connection string is correct
- [ ] Database has been seeded with test data
- [ ] Sample products are visible in the app
- [ ] Images load correctly

### Documentation
- [ ] SETUP_GUIDE.md is complete
- [ ] TRANSFER_GUIDE.md is complete
- [ ] .env.example files have proper descriptions
- [ ] README.md includes project overview

## File Transfer Checklist

### What to Include
- [ ] `src/` folder (complete)
- [ ] `backend/` folder (complete, excluding node_modules)
- [ ] `package.json` (root)
- [ ] `package-lock.json` (root)
- [ ] `vite.config.ts`
- [ ] `index.html`
- [ ] `tsconfig.json` (if in root)
- [ ] `SETUP_GUIDE.md`
- [ ] `TRANSFER_GUIDE.md`
- [ ] `setup.bat` (for Windows)
- [ ] `setup.sh` (for Mac/Linux)
- [ ] `.env.example` (root and backend/)
- [ ] `README.md`

### What to Exclude
- [ ] `node_modules/` (root)
- [ ] `backend/node_modules/`
- [ ] `dist/` (build artifacts)
- [ ] `.git/` (if using version control)
- [ ] `.vscode/` or `.idea/` (IDE configs)
- [ ] System files (`.DS_Store`, `Thumbs.db`)
- [ ] Actual `.env` files (only .env.example)
- [ ] Any local test files

### Transfer Method
- [ ] ZIP file created: `CSE-242.zip`
- [ ] File size confirmed: ~10-15 MB (without node_modules)
- [ ] File uploaded to: (Google Drive / OneDrive / GitHub / Email)
- [ ] Share link/credentials provided

## Post-Transfer Setup (New Laptop)

### Environment Setup
- [ ] Node.js installed (v16+)
- [ ] npm works: `npm --version`
- [ ] Node works: `node --version`

### Project Installation
- [ ] Extracted to desired location: `C:\Projects\CSE-242` (or preferred path)
- [ ] Terminal opened in project root
- [ ] `npm install` completed (frontend)
- [ ] `cd backend && npm install` completed (backend)

### Configuration
- [ ] `.env` file created in `backend/` folder
- [ ] MongoDB URI added to `.env`
- [ ] Database name configured in `.env`
- [ ] PORT configured (default 5000)
- [ ] Frontend `.env.local` created (if needed)
- [ ] VITE_API_BASE_URL configured (if backend on different server)

### Database Setup
- [ ] MongoDB credentials tested
- [ ] Database connection successful
- [ ] `npm run seed` executed (in backend folder)
- [ ] Sample data visible in database

### Running the Application
- [ ] Backend terminal: `cd backend && npm run dev`
  - [ ] Shows "Server listening on port 5000"
  - [ ] Shows "Connected to MongoDB"
- [ ] Frontend terminal: `npm run dev`
  - [ ] Shows "VITE ready"
  - [ ] Shows local URL (http://localhost:3000 or 3001)
- [ ] Browser opens to application
- [ ] Homepage loads successfully

### Functionality Testing
- [ ] [ ] Homepage displays categories
- [ ] [ ] Homepage displays featured products
- [ ] [ ] Can navigate to category pages
- [ ] [ ] Can view product details
- [ ] [ ] Images load for products
- [ ] [ ] Can add products to cart
- [ ] [ ] Can add to wishlist
- [ ] [ ] Can compare products
- [ ] [ ] Search functionality works
- [ ] [ ] Filtering works
- [ ] [ ] Sorting works
- [ ] [ ] Responsive design (mobile view)

### Common Issues Resolved
- [ ] No "MongoDB not found" errors
- [ ] No port conflicts (3000/5000)
- [ ] No CORS errors in console
- [ ] All images load (no broken images)
- [ ] No missing dependencies errors
- [ ] Console has no critical errors

## Troubleshooting Verification

### If Backend Won't Start
- [ ] Check Node.js installed: `node --version`
- [ ] Check npm: `npm --version`
- [ ] Verify `.env` file exists in `backend/` folder
- [ ] Check MONGODB_URI in `.env` is correct
- [ ] Try: `npm install` in backend folder again

### If Frontend Won't Start
- [ ] Verify Node.js installed
- [ ] Check in root directory (not backend)
- [ ] Try: `npm install` again
- [ ] Check port 3000 isn't in use

### If MongoDB Connection Fails
- [ ] Verify credentials in `.env`
- [ ] Check internet connection
- [ ] Verify MongoDB Atlas whitelist includes your IP
- [ ] Try with retryWrites=false in connection string

### If Images Don't Load
- [ ] Check API is returning image URLs
- [ ] Verify internet connection (using external images)
- [ ] Check browser console for 404 errors

## Final Sign-Off

- [ ] Application works completely on new laptop
- [ ] All features functional
- [ ] No critical errors
- [ ] Ready for use/deployment
- [ ] Created backup of working setup

---

## Quick Start Command Reference

```bash
# Extract and navigate
unzip CSE-242.zip
cd CSE-242

# Install dependencies
npm install
cd backend && npm install && cd ..

# Configure (edit credentials)
notepad backend\.env  # Windows
nano backend/.env     # Mac/Linux

# Seed database (first time)
cd backend && npm run seed && cd ..

# Run application
# Terminal 1:
cd backend && npm run dev

# Terminal 2 (new terminal window):
npm run dev

# Open browser:
# http://localhost:3000
```

---

**Last Updated:** December 2025
**Maintainer:** Development Team
