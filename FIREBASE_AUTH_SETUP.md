# Google Sign-In Setup Guide

## ✅ What's Been Implemented

Your Firebase authentication system is now set up with:
- ✅ Google Sign-In authentication
- ✅ Email/Password authentication (Sign up & Sign in)
- ✅ Real-time auth state management
- ✅ Persistent authentication (sessions maintained across page refreshes)
- ✅ Automatic logout functionality

## 🔧 Additional Firebase Console Configuration

To enable Google Sign-In, follow these steps in your Firebase Console:

### 1. Enable Google Sign-In Provider
- Go to [Firebase Console](https://console.firebase.google.com/)
- Select your project: **cryotech-4a70d**
- Navigate to **Authentication** → **Sign-in method**
- Click on **Google**
- Enable it and set your support email
- Click **Save**

### 2. Configure OAuth Consent Screen
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Select your project
- Navigate to **APIs & Services** → **OAuth consent screen**
- Choose **External** user type (for testing)
- Fill in the application details:
  - App name: CryoTech
  - User support email: your-email@gmail.com
  - Developer contact: your-email@gmail.com
- Add scopes: `email`, `profile`, `openid`
- Add test users (your test email addresses)
- Publish the app or keep it in testing mode

### 3. Verify Your Domain
- In Firebase Console → Project Settings → Authorized domains
- Your domain `localhost` should already be added
- When deploying, add your production domain here

## 📱 Features

### Google Sign-In Button
- Users can sign in directly with their Google account
- No password required
- Displays user's Google profile name and email
- Automatic session persistence

### Email/Password Authentication
- Traditional signup with email and password
- Password validation (minimum 6 characters)
- User data stored securely in Firebase

### Authentication State
- Real-time authentication state management
- Sessions persist across page refreshes
- Automatic redirect to login if not authenticated

## 🧪 Testing

### To test Google Sign-In:

1. **Development (localhost)**
   - Click "Sign in with Google" on the login page
   - Select a Google account
   - You'll be redirected to your account dashboard
   - Session persists even if you refresh the page

2. **Test Email/Password**
   - Switch to "Sign up" tab
   - Create an account with email and password
   - Use that account to sign in

3. **Test Logout**
   - Go to Account page
   - Click the "Logout" button
   - You'll be logged out and redirected to homepage
   - Session will be cleared

## 📁 Files Modified

- **src/firebase/firebase.init.js** - Added Firebase Auth initialization
- **src/firebase/authService.ts** - Created authentication service
- **src/components/LoginPage.tsx** - Added Google Sign-In button and real auth
- **src/components/AccountPage.tsx** - Updated logout to use Firebase
- **src/App.tsx** - Changed to use Firebase auth state instead of localStorage

## 🚀 Deployment

When deploying to production:

1. Add your production domain to Firebase Console → Authorized domains
2. Update Google Cloud Console OAuth settings with production domain
3. Test Google Sign-In on production domain
4. Ensure HTTPS is enabled (required for OAuth)

## 📚 API Reference

### Authentication Functions

**googleSignIn()**: Sign in with Google
```typescript
import { googleSignIn } from '../firebase/authService';
const user = await googleSignIn();
```

**emailSignUp()**: Create new account with email
```typescript
const user = await emailSignUp(email, password, name, phone);
```

**emailSignIn()**: Sign in with email
```typescript
const user = await emailSignIn(email, password);
```

**logOut()**: Sign out current user
```typescript
await logOut();
```

**subscribeToAuthChanges()**: Real-time auth state
```typescript
const unsubscribe = subscribeToAuthChanges((user) => {
  // Handle auth state change
});
```

## ⚠️ Important Notes

- Authentication state is managed by Firebase and persists automatically
- User sessions remain active even after closing the browser
- To clear all user data, the user must explicitly logout
- All sensitive authentication is handled by Firebase securely
- Passwords are never stored in localStorage

## 🔒 Security

- All credentials are handled by Firebase (never transmitted to your server)
- OAuth tokens are managed securely by Firebase
- Use HTTPS in production (required by Firebase)
- Sensitive API keys are configured in Firebase Console

## 🐛 Troubleshooting

**"Google Sign-In not working"**
- Ensure Google provider is enabled in Firebase Console
- Check that localhost/your domain is in Authorized domains
- Verify OAuth consent screen is configured

**"Users can't sign up with email"**
- Check that Email/Password provider is enabled in Firebase
- Ensure password is at least 6 characters
- Check browser console for specific error messages

**"Sessions not persisting"**
- Firebase automatically persists sessions in browser storage
- Clearing browser storage will clear the session
- This is expected behavior
