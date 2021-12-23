import React, {useReducer} from "react"

const firebaseContext = React.createContext(null)

/*===========================
COME BACK TO THIS handleclick
=============================*/

function FirebaseContextProvider({children}){
  const initialSignInPassword = "HHQEyPJ6krf3Lh6"
  let initialState = {
    email: "", emailIsActive: false,
    password: "", passwordIsActive: false,
    firstName: "", firstNameIsActive: false,
    lastName: "", lastNameIsActive: false,
    cardNumber: "", cardNumberIsActive: false,
    expirationDate: "", expirationDateIsActive: false,
    securityCode: "", securityCodeIsActive: false,
    planName: "", planPrice:"",
    signInPassword: initialSignInPassword, signInPasswordIsActive:false
  }
  let [state, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      case "input":{
        return {...state, ...action.payload}
      }
      case "blurred":{
        return {...state, ...action.payload}
      }
      case 'savePlan':{
        return {...state, planName: action.payload.name, planPrice: action.payload.price }
      }
      case 'emptyPassword':{
        return {...state, password: initialSignInPassword}
      }
      default:{
        return state
      }
    }
  }, initialState)

  return (
    <firebaseContext.Provider value={{state, dispatch}}>
      {children}
    </firebaseContext.Provider>
  )
}

export {FirebaseContextProvider, firebaseContext}
