import React, {useState} from "react"

const optInContext = React.createContext()

function OptInContextProvider({children}){
  const [email, setEmail] = useState('')
  const isEmpty = email.length < 1
  const emailIsValid = /[^@]+@[^@]+\.[^@]+/.test(email)
  const [activatedInput, setActivatedInput] = useState(false)

  const handleChange =(event)=>{
    event.preventDefault()
    const {value} = event.target
    setEmail(value)
    setActivatedInput(true)
  }

  return (
    <optInContext.Provider value={{email, emailIsValid, activatedInput, handleChange, isEmpty}}>
      {children}
    </optInContext.Provider>
  )
}

export {OptInContextProvider, optInContext}
