import React, {useReducer} from "react"

const inputContext = React.createContext()

/*===========================
COME BACK TO THIS handleclick
=============================*/

function InputContextProvider({children}){
  const initialSignInPassword = "HHQEyPJ6krf3Lh6"
  let initialState = {
    email: "", emailIsActive: false,
    password: "", passwordIsActive: false,
    firstName: "", firstNameIsActive: false,
    lastName: "", lastNameIsActive: false,
    cardNumber: "", cardNumberIsActive: false,
    expirationDate: "", expirationDateIsActive: false,
    securityCode: "", securityCodeIsActive: false,
    checkboxIsChecked: false, checkboxIsActive: false,
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
      case 'check':{
        return {...state, checkboxIsActive:true, checkboxIsChecked: !state.checkboxIsChecked}
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
    <inputContext.Provider value={{state, dispatch}}>
      {children}
    </inputContext.Provider>
  )
}

export {InputContextProvider, inputContext}
