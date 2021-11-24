import React, {useState, useEffect} from "react"

const inputContext = React.createContext()

function InputContextProvider({children}){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailIsValid, setEmailIsValid] = useState(true)
  const [passwordIsValid, setPasswordIsValid] = useState(true)
  const [emailIsActivated, setEmailIsActivated] = useState(false)
  const [passwordIsActivated, setPasswordIsActivated] = useState(false)
  const emailErrorMessage = "Please enter a valid email address"
  const passwordErrorMessage = "Password should be between 6 and 60 characters"

  useEffect(()=>{
    const emailRegex = /[^@]+@[^@]+\.[^@]+/
    emailIsActivated && setEmailIsValid(emailRegex.test(email))
  }, [email, emailIsActivated])

  useEffect(()=>{
    passwordIsActivated && setPasswordIsValid(password.length>=6)
  }, [password, passwordIsActivated])

  // const [Email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const isEmpty = Email.length < 1
  // const emailIsValid = /[^@]+@[^@]+\.[^@]+/.test(Email)
  // const [activatedInput, setActivatedInput] = useState(false)


  return (
    <inputContext.Provider value={{email, setEmail,
          password, setPassword,
          emailIsValid, setEmailIsValid,
          passwordIsValid, setPasswordIsValid,
          emailIsActivated, setEmailIsActivated,
          passwordIsActivated, setPasswordIsActivated,
          emailErrorMessage, passwordErrorMessage}}
    >
      {children}
    </inputContext.Provider>
  )
}

export {InputContextProvider, inputContext}
