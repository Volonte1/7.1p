import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc , setDoc} from 'firebase/firestore'
    
const firebaseConfig = {

    apiKey: "AIzaSyB2EI3U_moo_L8CdVwVNQYjw7Kon2crng8",
  
    authDomain: "deakin-web-app-57566.firebaseapp.com",
  
    projectId: "deakin-web-app-57566",
  
    storageBucket: "deakin-web-app-57566.appspot.com",
  
    messagingSenderId: "295819319965",
  
    appId: "1:295819319965:web:93342e20e6c320a2781274"
  
  };

  //constant not recognized, unsure why, exact copy of solution code.
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider(); 
   provider.setCustomParameters ({
    prompt:"select_account"
   });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth= async (userAuth, additionalInformation ={}) =>{
  if (!userAuth) return;
  

  const userDocRef = doc (db, 'users', userAuth.uid );
 
  
  const userSnapshot = await getDoc(userDocRef);
 

  if (! userSnapshot.exists()){
    const {Name , email} = userAuth;
    const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      Name,
      email,
      createdAt,
      ...additionalInformation
    })
  }
  catch (error){
  console.log('error in creating ', error.message)
  }
}

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
  if (!email || !password) return;
 return await createUserWithEmailAndPassword(auth, email, password)
}

export const signinAuthUserWithEmailAndPassword = async (email, password) =>{
  if (!email || !password) return;
 return await signInWithEmailAndPassword(auth, email, password)
}