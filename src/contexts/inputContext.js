import React, {useState} from "react"

const inputContext = React.createContext()

function InputContextProvider({children}){
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
    <inputContext.Provider value={{email, emailIsValid, activatedInput, handleChange, isEmpty}}>
      {children}
    </inputContext.Provider>
  )
}

export {InputContextProvider, inputContext}
