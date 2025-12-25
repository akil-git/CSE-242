# Tech Accessories E-commerce Site

This is a full-stack e-commerce application for Tech Accessories. The design is based on https://www.figma.com/design/mg61KzN1JbG7pjhCWEFYWL/Tech-Accessories-E-commerce-Site.

## Features

- 🏪 **Product Catalog** - Browse multiple categories of tech accessories
- 🛒 **Shopping Cart** - Add/remove items from cart
- ❤️ **Wishlist** - Save favorite products
- 🔄 **Product Comparison** - Compare specs of multiple products
- 🔍 **Search & Filter** - Find products by name, category, price
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🗄️ **MongoDB Backend** - Persistent data storage
- ⚡ **Real-time API** - Fast product fetching from database

## Project Structure

```
CSE-242/
├── src/                    # React frontend
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── lib/               # Utilities, types, API calls
│   └── styles/            # CSS styles
├── backend/               # Express.js backend
│   ├── server.js          # API server
│   ├── seed.ts            # Database seeding
│   └── .env               # Environment variables
├── package.json
├── vite.config.ts
├── SETUP_GUIDE.md         # Detailed setup instructions
├── TRANSFER_GUIDE.md      # How to transfer to another laptop
└── DEPLOYMENT_CHECKLIST.md # Pre-deployment checklist
```

## Quick Start

### Prerequisites
- Node.js v16+ ([Download](https://nodejs.org/))
- npm (comes with Node.js)
- Internet connection (for MongoDB)

### Installation

**For detailed instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)**

#### Windows Users
```bash
# Run the setup script
setup.bat
```

#### Mac/Linux Users
```bash
chmod +x setup.sh
./setup.sh
```

#### Manual Installation
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### Configuration

1. **Backend Environment Setup**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your MongoDB credentials
   ```

2. **Frontend Environment Setup (Optional)**
   ```bash
   cp .env.example .env.local
   # Edit if your backend runs on different server/port
   ```

### Running the Application

**Terminal 1 - Backend Server**
```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend Development**
```bash
npm run dev
# Frontend runs on http://localhost:3000
```

**Open in Browser**
- Navigate to: http://localhost:3000

### Seed the Database (First Time)
```bash
cd backend
npm run seed
```

## Transferring to Another Laptop

**See [TRANSFER_GUIDE.md](./TRANSFER_GUIDE.md) for detailed instructions**

Quick summary:
1. Save the project to a ZIP file (exclude `node_modules/`)
2. Transfer to new laptop
3. Extract ZIP file
4. Run `setup.bat` (Windows) or `./setup.sh` (Mac/Linux)
5. Configure `.env` with MongoDB credentials
6. Run frontend and backend

## Technology Stack

**Frontend:**
- React 18+ with TypeScript
- Vite (fast build tool)
- Tailwind CSS (styling)
- React Router (navigation)
- Lucide React (icons)

**Backend:**
- Node.js + Express.js
- MongoDB (database)
- CORS (cross-origin requests)

**Database:**
- MongoDB Atlas (Cloud MongoDB)
- 12 sample products pre-loaded

## API Endpoints

```
GET  /api/ping                 - Health check
GET  /api/categories           - Get all categories
GET  /api/products             - Get products (with filters)
GET  /api/products/:id         - Get single product
GET  /api/images               - Get image mappings
```

## Development

### Build for Production

**Frontend:**
```bash
npm run build
npm run preview
```

**Backend:**
```bash
cd backend
npm start
```

### Project Scripts

```bash
npm run dev           # Start frontend dev server
npm run build         # Build frontend for production
npm run preview       # Preview production build

cd backend
npm run dev           # Start backend with auto-reload
npm start             # Start backend (production)
npm run seed          # Seed database with sample data
```

## Troubleshooting

### MongoDB Connection Issues
- Check MongoDB credentials in `.env`
- Verify MongoDB Atlas IP whitelist
- Ensure internet connection
- See detailed help in [SETUP_GUIDE.md](./SETUP_GUIDE.md)

### Port Already in Use
- Backend: Change `PORT` in `backend/.env`
- Frontend: Vite automatically tries next available port

### Dependencies Issues
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

See [SETUP_GUIDE.md](./SETUP_GUIDE.md#troubleshooting) for more solutions.

## Pre-Deployment Checklist

Before deploying to production, review [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)

## Project Status

✅ Complete and functional
- All features implemented
- Database connected
- All APIs working
- Ready for deployment

## License

This project is based on the Figma design by the original designer.

## Support

For setup issues, see:
- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Detailed setup instructions
- [TRANSFER_GUIDE.md](./TRANSFER_GUIDE.md) - Transferring to another laptop
- [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) - Pre-deployment verification

---

**Last Updated:** December 2025
**Version:** 1.0.0
**Status:** ✅ Production Ready
