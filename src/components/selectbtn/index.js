import {SelectContainer, Select, Option, Selected, SelectItems, SelectItem,
        Flag, SelectText, DialCode} from "./styles/selectbtn"
import {useRef, useEffect, useState, useCallback, useContext} from "react"
import countriesData from "./../../fixtures/countries_data.json"
import {selectContext} from "./../../contexts/selectContext"



export default function Selectbtn(props){
  const defaultCountry = countriesData.find(i=>i.dialCode === "+234")
  const defaultIndex = countriesData.indexOf(defaultCountry)
  const {dispatch} = useContext(selectContext)

  const [displaySelect, setDisplaySelect] = useState(false)
  const [selected, setSelected] = useState(defaultCountry)
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  const optionsRef = useRef(null)



  const handleClick =()=>{
    setDisplaySelect(prev=>!prev)
  }

  const handleBlur =()=>{
    setDisplaySelect(false)
  }

  useEffect(()=>{
    dispatch({type: "setDialCode", payload: defaultCountry.dialCode})
    // eslint-disable-next-line
  }, [])

  useEffect(()=>{
    activeIndex <= 2 ? optionsRef.current.children[0].scrollIntoView():
    optionsRef.current.children[activeIndex-2].scrollIntoView()
    window.scrollTo(0, 0)
  })

  const handleSelect =(country, index)=>{
    setActiveIndex(index)
    setSelected(country)
    // dispatch({type: "setDialCode", payload: country.dialCode})
  }

  /* !comment
  dipatch is used to store dialcode in state which is in my opinion not ideal hence 
  it has been commented out once I found a method that allows me to extract value from 
  the button without resorting to context.
   */ 
 

  const selectRef = useCallback(node=>{
    if (node != null){
      node.selectedIndex = activeIndex
      node.dispatchEvent( new Event("change", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20,
    }))
  }}, [activeIndex])
// turns out actually grabbing the select button allows me to update state without having to 
// recourse to context.

  return (
    <SelectContainer tabIndex="0" onBlur={handleBlur} onClick={handleClick}>
      <Select ref={selectRef} onChange={(e)=>props.handlechange(e.target.value)}>
        {countriesData.map((i, index)=>{return(<Option onClick={()=>console.log("clicked", index)}key={index}>{i.dialCode}</Option>)})}
      </Select>

      <Selected displaySelect={displaySelect}>
        <Flag src={selected.flag} alt={selected.name} />
        <SelectText>{selected.dialCode}</SelectText>
      </Selected>

      <SelectItems displaySelect={displaySelect} ref={optionsRef}>
        {countriesData.map((country, index)=>{
          return (
            <SelectItem
              key={index}
              isActive={index===activeIndex}
              onClick={()=>handleSelect(country, index)}
            >
              <Flag src={country.flag} alt={country.name} />
              <SelectText>{country.name}</SelectText>
              <DialCode isActive={index===activeIndex}>{country.dialCode}</DialCode>
            </SelectItem>)
          })
        }
      </SelectItems>
    </SelectContainer>
)}
