import { createContext, useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import {getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import * as ROUTES from "./../constants/routes"

const authContext = createContext(null)

function AuthContextProvider({children}){
    const [user, setUser] = useState(null)
    const [error, setError] = useState("")
    const [currentStepUrl, setCurrentStepUrl] = useState("")
    const [planName, setPlanName] = useState("")
    const [planPrice, setPlanPrice] = useState("")
    const [isAuthenticating, setIsAuthenticating] = useState(true)
    const db = getFirestore()
    const auth = getAuth()
    const navigate = useNavigate()

    
    const signup=(email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((response)=>{
            localStorage.setItem("currentStepUrl", ROUTES.SIGN_UP_HOME)
            // store user and current step in firestore
            setDoc(doc(db, "users", response.user.uid), {email, password, currentStepUrl: ROUTES.SIGN_UP_HOME})
            navigate(ROUTES.SIGN_UP_HOME)
        }).catch(error=>{
            console.error(error)
            setError(error.message)
        })
    } 

    onAuthStateChanged(auth, (user)=>{
        if(user){
            setUser(user)
            getDoc(doc(db, 'users', user.uid)) 
            .then(snapshot =>{
                if(snapshot.exists()){
                    const currentUser = snapshot.data()
                    setCurrentStepUrl(currentUser.currentStepUrl)
                    setPlanName(currentUser.planName)
                    setPlanPrice(currentUser.planPrice)
                }
            })
        }else{
            setUser("")
        } 
    })

    useEffect(()=>{
        user != null && setIsAuthenticating(false)
    })

    const signin=()=>{

    }

    const update=(mergeObject)=>{
        const userRef = doc(db, 'users', user.uid);
        setDoc(userRef, mergeObject, {merge:true})
        .then(()=>{
            getDoc(doc(db, 'users', user.uid)) 
            .then(snapshot =>{
                if(snapshot.exists()){
                    const currentUser = snapshot.data()
                    setCurrentStepUrl(currentUser.currentStepUrl)
                    setPlanName(currentUser.planName)
                    setPlanPrice(currentUser.planPrice)
                }
            })
        })
    }

    return(
        <authContext.Provider value={{user, error, currentStepUrl, isAuthenticating, signup,  signin, update}}>
            {children}
        </authContext.Provider>
    )

}

export {AuthContextProvider, authContext}