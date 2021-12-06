import React, {useState, useEffect, useReducer} from "react"

const inputContext = React.createContext()

/*===========================
COME BACK TO THIS handleclick
=============================*/

function InputContextProvider({children}){
  let initialState = {
    email: "",
    emailIsActive: false,
    emailErrorMessage: "this error",
    password: "",
    passwordIsValid: "",
    passwordIsActive: ""
  }
  let [state, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      case "fill":
        return {
          ...state,
          email: action.payload
        }
      case "focusOut":{
        return {
          ...state,
          emailIsActive: true,
          emailErrorMessage: "Enter a valid email address"
        }
      }
      default:{
        return state
      }
    }
  }, initialState)

  const [email, setEmail] = useState('')
  const [emailIsValid, setEmailIsValid] = useState(true)
  const [emailIsActivated, setEmailIsActivated] = useState(false)

  return (
    <inputContext.Provider value={{state, dispatch}}>
      {children}
    </inputContext.Provider>
  )
}

export {InputContextProvider, inputContext}
