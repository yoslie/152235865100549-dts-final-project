import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBn2LdwO2x6B7f78QETTc_lo8tqjGg0OZg",
  authDomain: "dts-mini-project-rea2a-pair14.firebaseapp.com",
  projectId: "dts-mini-project-rea2a-pair14",
  storageBucket: "dts-mini-project-rea2a-pair14.appspot.com",
  messagingSenderId: "399800286255",
  appId: "1:399800286255:web:c7cecf5e1ef221620c5ada"
};

// Initiation Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function for Registration
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(
      "User yang teregistrasi dan berhasil login adalah",
      response.user
    );
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

// Function for Login
const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log("User yang berhasil login adalah", userCredential.user);
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
  }
};

// Function for reset Password
const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);

    console.log("Password reset sudah dikirimkan");
  } catch (err) {
    console.log(err);
  }
};

// Function for sign out apps
const signOutFromApps = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};

// Export function and auth
export {
  auth,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  resetPassword,
  signOutFromApps,
};
