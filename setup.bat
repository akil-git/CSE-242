@echo off
REM Quick Start Script for Tech Gear Project
REM Run this from the project root directory

echo.
echo ========================================
echo Tech Gear - Quick Start
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js is installed: 
node --version
echo.

REM Install dependencies
echo Installing frontend dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install frontend dependencies
    pause
    exit /b 1
)

echo.
echo Installing backend dependencies...
cd backend
call npm install
if errorlevel 1 (
    echo ERROR: Failed to install backend dependencies
    cd ..
    pause
    exit /b 1
)
cd ..

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo To start the project:
echo.
echo 1. Open two terminal windows
echo.
echo 2. In Terminal 1 (Backend):
echo    cd backend
echo    npm run dev
echo.
echo 3. In Terminal 2 (Frontend):
echo    npm run dev
echo.
echo 4. Open browser to: http://localhost:3000
echo.
echo ========================================
echo.
pause
