import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"

export const AuthContext = createContext(null);


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, displayName, photoUrl) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                return updateProfile(userCredential.user, {
                    displayName,
                    photoUrl,
                }).then(() => {
                    return userCredential;
                });
            }
        );
    };


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log("logged User", loggedUser)
            setLoading(false)
            setUser(loggedUser)
        })
        return () => {
            return unsubscribe()
        }
    }, []);

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        createUser,
        signIn,
        googleLogin,
        logOut,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;