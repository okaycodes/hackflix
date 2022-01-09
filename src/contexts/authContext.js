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
    // 1. check for auth state
    onAuthStateChanged(auth, (user)=>{
        if(user){
            setUser(user)
        }else{
            setUser("")
        } 
    })

    /*!comment
    set Authenticating is false when the async auth is completed. It is important to not here that
    the user is initialized as null and not an empty string. That is so that this function can work.
    as initializing it to an empty string will mean if no user is returned and setUser("") in 
    onAuthStateChanged is run, the  code below will not run. Of course null isn't the only way to achieve
    this effect.
    */ 
    useEffect(()=>{
        user != null && setIsAuthenticating(false)
    },[user])


    // gets user from firestore if user is logged in and the relevant data if the signup is incomplete
    useEffect(()=>{
        if(user){
            getDoc(doc(db, 'users', user.uid)) 
            .then(snapshot =>{
                if(snapshot.exists()){
                    const data = snapshot.data()
                    setCurrentStepUrl(data.currentStepUrl)
                    dispatch({type:'savePlan', payload:{name:data.planName, price:data.planPrice}})
                    
                }
            })
        }
    // eslint-disable-next-line
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