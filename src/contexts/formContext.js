import React, {useReducer} from "react"

const formContext = React.createContext()

/*===========================
COME BACK TO THIS handleclick
=============================*/

function FormContextProvider({children}){
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
      case 'passwordFieldIsEmpty':{
        return {...state, password: initialSignInPassword}
      }
      case 'emptySignupForm': {
        return {...state, email: "", password: ""}
      }
      default:{
        return state
      }
    }
  }, initialState)

  return (
    <formContext.Provider value={{state, dispatch}}>
      {children}
    </formContext.Provider>
  )
}

export {FormContextProvider, formContext}