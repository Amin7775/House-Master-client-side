import { createContext, useState } from "react";
import app from "../firebase/firebase.cofig";


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        
    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;