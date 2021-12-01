import React, {useState, useEffect} from "react"

const inputContext = React.createContext()

/*===========================
COME BACK TO THIS handleclick
=============================*/

function InputContextProvider({children}){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailIsValid, setEmailIsValid] = useState(true)
  const [passwordIsValid, setPasswordIsValid] = useState(true)
  const [emailIsActivated, setEmailIsActivated] = useState(false)
  const [passwordIsActivated, setPasswordIsActivated] = useState(false)
  const emailErrorMessage = "Please enter a valid email address"
  const passwordErrorMessage = "Password should be between 6 and 60 characters"
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [securityCode, setSecurityCode] = useState('')



  useEffect(()=>{
    const emailRegex = /[^@]+@[^@]+\.[^@]+/
    emailIsActivated && setEmailIsValid(emailRegex.test(email))
  }, [email, emailIsActivated])

  useEffect(()=>{
    passwordIsActivated && setPasswordIsValid(password.length>=6)
  }, [password, passwordIsActivated])

  const handleChange=(event)=>{
    const {name, value} = event.target
    name === "email" ? setEmail(value) : name==="password" && setPassword(value)
  }

  const handleBlur=(event)=>{
    const {name} = event.target
    name === "email" ? setEmailIsActivated(email.length>=1 && true) :
    name==="password" && setPasswordIsActivated(password.length>=1 && true)
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
    <inputContext.Provider value={{email, setEmail,
          password, setPassword,
          emailIsValid, setEmailIsValid,
          passwordIsValid, setPasswordIsValid,
          emailIsActivated, setEmailIsActivated,
          passwordIsActivated, setPasswordIsActivated,
          firstName, setFirstName,
          lastName, setLastName,
          cardNumber, setCardNumber,
          expirationDate, setExpirationDate,
          securityCode, setSecurityCode,
          emailErrorMessage, passwordErrorMessage,
          handleChange, handleBlur, handleClick}}
    >
      {children}
    </inputContext.Provider>
  )
}

export {InputContextProvider, inputContext}
