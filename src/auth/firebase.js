// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    
  } from "firebase/auth";
  
import { clearUser, setUser} from "../features/authSlice";


const firebaseConfig = {
  apiKey: "AIzaSyDIPC_qxTn9B_IcrZioeA97A9bjpe6PeiA",
  authDomain: "fakeshop-5c894.firebaseapp.com",
  projectId: "fakeshop-5c894",
  storageBucket: "fakeshop-5c894.appspot.com",
  messagingSenderId: "386751331429",
  appId: "1:386751331429:web:871b5d5fed54d45353da8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export const createUser = async (email, password, navigate, displayName) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
        
        console.log("girdi mi")
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential)
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });

      navigate("/");
      //toastSuccessNotify("Registered successfully!");
     console.log(userCredential);
     
    } catch (error) {
        alert("kız hatalı oldu neden")
      //toastErrorNotify(error.message);
       //alert(error.message);
    }
  };


  export const logIn = async (email, password, navigate) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("hellooo")
      navigate("/");
      //toastSuccessNotify("Logged in successfully!");
    } catch (error) {
      //toastErrorNotify(error.message);
    alert(error.message);
    }
  };



  export const userObserver = (dispatch) => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName } = user;
        dispatch(
          setUser({
            displayname: displayName,
            email: email,
          })
          
        );
        console.log(user)
        
      } else {
        console.log("user signed out");
          dispatch(
              clearUser()
            );
      }
    });
  };




  
export const signUpWithGoogle = (navigate) => {
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        console.log(result)
        console.log("hiiii")
        navigate("/");
        //toastSuccessNotify("Logged in successfully!");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };



export const logOut = (navigate, dispatch) => {
  signOut(auth);
  dispatch(clearUser());
  //toastWarnNotify("Çıkış Yapıldı..");
  navigate("/");
};

