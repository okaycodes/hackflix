import { createContext, useEffect, useState, useContext } from "react"
import {useNavigate} from "react-router-dom"
import {getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import * as ROUTES from "./../constants/routes"
import { formContext } from "./formContext"

const authContext = createContext(null)

function AuthContextProvider({children}){
    const [user, setUser] = useState(null)
    const [error, setError] = useState("")
    const [currentStepUrl, setCurrentStepUrl] = useState("")
    const [isAuthenticating, setIsAuthenticating] = useState(true)
    const {dispatch} = useContext(formContext)
    
    const db = getFirestore()
    const auth = getAuth()
    const navigate = useNavigate()
    
    useEffect(()=>{
        user != null && setIsAuthenticating(false)
    },[user])
    
    const signup=(email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((response)=>{
            localStorage.setItem("currentStepUrl", ROUTES.SIGN_UP_HOME)
            // store user and current step in firestore
            setDoc(doc(db, "users", response.user.uid), {email, password, currentStepUrl: ROUTES.SIGN_UP_HOME})
            navigate(ROUTES.SIGN_UP_HOME)
        }).catch(error=>{
            setError(error.message)
        })
    } 

    onAuthStateChanged(auth, (user)=>{
        if(user){
            setUser(user)
            getDoc(doc(db, 'users', user.uid)) 
            .then(snapshot =>{
                if(snapshot.exists()){
                    const data = snapshot.data()
                    setCurrentStepUrl(data.currentStepUrl)
                    dispatch({type:'savePlan', payload:{name:data.planName, price:data.planPrice}})
                }
            })
        }else{
            setUser("")
        } 
    })


    const signin=(email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(response=>{
            getDoc(doc(db, "users", response.user.uid))
            .then(snapShot=>{
                const data = snapShot.data()
                if(data.currentStepUrl){
                    setCurrentStepUrl(currentStepUrl)
                    dispatch({type:'savePlan', payload:{name:data.planName, price:data.planPrice}})
                    navigate(ROUTES.HOME)
                } else {
                    navigate(ROUTES.SELECT_PROFILE)
                }
            })
                // if(error.message===)
        }).catch(err=>{
            if(err.message.includes('user-not-found')){
                setError("unregistered user")
            }else if (err.message.includes('wrong-password')){
                setError("incorrect password")
            }
        })  
    }

    const update=(mergeObject, route)=>{
        const userRef = doc(db, 'users', user.uid);
        setDoc(userRef, mergeObject, {merge:true})
        .then(()=>{
            getDoc(doc(db, 'users', user.uid)) 
            .then(snapshot =>{
                if(snapshot.exists()){
                    const currentUser = snapshot.data()
                    setCurrentStepUrl(currentUser.currentStepUrl)
                    navigate(route)
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