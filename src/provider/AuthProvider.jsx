import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.cofig";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [photo,setPhoto]=useState()
    
    //Register User
    const createUser= (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //Auth Observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>unSubscribe();
    },[])

    //Update User with display name and photoUrl after creating user
    const updateUser = (name,photoUrlFromRegister) =>{
        {photoUrlFromRegister && setPhoto(photoUrlFromRegister)}
        {photoUrlFromRegister || setPhoto("https://i.ibb.co/RjNr5mp/speaker2.jpg")}
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoUrlFromRegister
        })
    }

    //Logout
    const logOut= () =>{
        return signOut(auth)
    }

    //Login User
    const loginUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //Google Register
    const googleRegister=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        updateUser,
        logOut,
        loginUser,
        googleRegister,
        photo

    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;