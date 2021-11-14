import React, {useState} from "react"

const accordionContext = React.createContext()


function AccordionContextProvider({children}){
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (index) =>{
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)
  }

  return (
    <accordionContext.Provider value={{activeIndex, toggle}}>
      {children}
    </accordionContext.Provider>
  )
}

export {AccordionContextProvider, accordionContext}
