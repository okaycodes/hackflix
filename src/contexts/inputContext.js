import React, {useState, useEffect, useReducer} from "react"

const inputContext = React.createContext()

/*===========================
COME BACK TO THIS handleclick
=============================*/

function InputContextProvider({children}){
  let initialState = {
    email: "",
    emailIsValid: "",
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
          emailIsActive: false,
          email: action.payload
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
