import React, {useReducer} from "react"

const selectContext = React.createContext()

/*===========================
COME BACK TO THIS handleclick
=============================*/

function SelectContextProvider({children}){
  let initialState = {
    dialCode: ""
  }
  let [state, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      case 'setDialCode': {
        return {...state, dialCode: action.payload}
      }
      default:{
        return state
      }
    }
  }, initialState)

  return (
    <selectContext.Provider value={{state, dispatch}}>
      {children}
    </selectContext.Provider>
  )
}

export {SelectContextProvider, selectContext}
