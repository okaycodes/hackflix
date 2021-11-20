import React, {useState} from "react"

const optInContext = React.createContext()

function OptInContextProvider({children}){
  

  return (
    <optInContext.Provider value={}>
      {children}
    </optInContext.Provider>
  )
}

export {OptInContextProvider, optInContext}
