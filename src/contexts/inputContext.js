import React, {useReducer} from "react"

const inputContext = React.createContext()

/*===========================
COME BACK TO THIS handleclick
=============================*/

function InputContextProvider({children}){
  let initialState = {
    email: "",
    emailIsActive: false,
    password: "",
    passwordIsActive: ""
  }
  let [state, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      case "input":{
        return {...state, ...action.payload}
      }
      case "focusOut":{
        return {...state, emailIsActive: true, emailErrorMessage: "Enter a valid email address"}
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
