import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDXWA9cbObzKFddqebF34Ke9m6qhjkbMHw",
    authDomain: "hospital-90a89.firebaseapp.com",
    projectId: "hospital-90a89",
    appId: "1:409945300926:web:d2cee5e2eda49520c3e3ef",
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Register a New User
function register(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
              const user = userCredential.user;
              console.log("User registered", user);
        })
        .catch((error) => {
              console.error("Error registered", error);
        });
}

// Sign In a User
function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
            const user = userCredential.user;
            console.log("User registered", user);
      })
      .catch((error) => {
            console.error("Error registered", error);
      });
}

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = loginForm.getElementById("email").value;
      console.log(email);
});