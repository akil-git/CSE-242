import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "./firebase.init";
import { User } from "../lib/types";

const googleProvider = new GoogleAuthProvider();

export const googleSignIn = async (): Promise<User> => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const firebaseUser = result.user;

    const user: User = {
      id: firebaseUser.uid,
      email: firebaseUser.email || "",
      name: firebaseUser.displayName || "User",
      addresses: [],
      orders: [],
    };

    return user;
  } catch (error) {
    console.error("Google sign-in error:", error);
    throw error;
  }
};

export const emailSignUp = async (
  email: string,
  password: string,
  name: string,
  phone?: string
): Promise<User> => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = result.user;

    // Update profile with display name
    await updateProfile(firebaseUser, {
      displayName: name,
    });

    const user: User = {
      id: firebaseUser.uid,
      email: firebaseUser.email || "",
      name: name,
      phone: phone,
      addresses: [],
      orders: [],
    };

    return user;
  } catch (error) {
    console.error("Email sign-up error:", error);
    throw error;
  }
};

export const emailSignIn = async (email: string, password: string): Promise<User> => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const firebaseUser = result.user;

    const user: User = {
      id: firebaseUser.uid,
      email: firebaseUser.email || "",
      name: firebaseUser.displayName || "User",
      addresses: [],
      orders: [],
    };

    return user;
  } catch (error) {
    console.error("Email sign-in error:", error);
    throw error;
  }
};

export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const user: User = {
          id: firebaseUser.uid,
          email: firebaseUser.email || "",
          name: firebaseUser.displayName || "User",
          addresses: [],
          orders: [],
        };
        resolve(user);
      } else {
        resolve(null);
      }
      unsubscribe();
    });
  });
};

export const subscribeToAuthChanges = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      const user: User = {
        id: firebaseUser.uid,
        email: firebaseUser.email || "",
        name: firebaseUser.displayName || "User",
        addresses: [],
        orders: [],
      };
      callback(user);
    } else {
      callback(null);
    }
  });
};
