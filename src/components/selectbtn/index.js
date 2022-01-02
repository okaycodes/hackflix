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
    dispatch({type: "setDialCode", payload: country.dialCode})
  }

  // dipatch is used to store dialcode in state which may not be ideal but
  // needed in this case to allow consumption in LoginHelp or wherever the component
  // is used

  const selectRef = useCallback(node=>{
    if (node != null){
      node.selectedIndex = activeIndex
  }}, [activeIndex])
// turns out I didn't need to grab the select at all. I actually didn't need
// select element at all as I am not really using it in the select button.

  return (
    <SelectContainer tabIndex="0" onBlur={handleBlur} onClick={handleClick}>
      <Select  ref={selectRef}>
        {countriesData.map((i, index)=>{return(<Option key={index}>{i.dialCode}</Option>)})}
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
