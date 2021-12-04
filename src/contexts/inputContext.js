import React, {useState, useEffect} from "react"

const inputContext = React.createContext()

/*===========================
COME BACK TO THIS handleclick
=============================*/

function InputContextProvider({children}){
  const [email, setEmail] = useState('')
  const [emailIsValid, setEmailIsValid] = useState(true)
  const [emailIsActivated, setEmailIsActivated] = useState(false)
  // const emailErrorMessage = "Please enter a valid email address"

  const [password, setPassword] = useState('')
  // const [passwordIsValid, setPasswordIsValid] = useState(true)
  const [passwordIsActivated, setPasswordIsActivated] = useState(false)
  // const passwordErrorMessage = "Password should be between 6 and 60 characters"

  useEffect(()=>{
    const emailRegex = /[^@]+@[^@]+\.[^@]+/
    emailIsActivated && setEmailIsValid(emailRegex.test(email))
  }, [email, emailIsActivated])
  //
  // useEffect(()=>{
  //   passwordIsActivated && setPasswordIsValid(password.length>=6)
  // }, [password, passwordIsActivated])

  const handleChange=(event)=>{
    const {name, value} = event.target
    switch(name){
      case "email": setEmail(value)
      break
      case "password": setPassword(value)
      break
      default: return
    }
  }

  const handleBlur=(event)=>{
    const {name} = event.target
    switch(name){
      case "email": setEmailIsActivated(email.length>=1 && true)
      break
      case "password": setPasswordIsActivated(password.length>=1 && true)
      break
      default: return
  }
}

/*====================
COME BACK TO THIS
=====================*/
  const handleClick=(event)=>{
    !emailIsValid && setEmailIsActivated(true)
  }
  // const [Email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const isEmpty = Email.length < 1
  // const emailIsValid = /[^@]+@[^@]+\.[^@]+/.test(Email)
  // const [activatedInput, setActivatedInput] = useState(false)


  return (
    <inputContext.Provider value={{
          email, setEmail, emailIsValid,
          emailIsActivated, setEmailIsActivated,
          password, setPassword,
          passwordIsActivated, setPasswordIsActivated,
          handleChange, handleBlur, handleClick}}
    >
      {children}
    </inputContext.Provider>
  )
}

export {InputContextProvider, inputContext}
