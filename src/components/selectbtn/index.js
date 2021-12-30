import {SelectContainer, Select, Option, Selected, SelectItems, SelectItem,
        Flag, SelectText, DialCode} from "./styles/selectbtn"
import {useRef, useEffect, useState, useCallback} from "react"
import countriesData from "./../../fixtures/countries_data.json"


export default function Selectbtn(props){
  const defaultCountry = countriesData.find(i=>i.dialCode === "+234")
  const defaultIndex = countriesData.indexOf(defaultCountry)


  const [selectItems, setSelectItems] = useState("")
  const [displaySelect, setDisplaySelect] = useState(false)
  const [selected, setSelected] = useState(defaultCountry)
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  const [selectEl, setSelectEl] = useState("")
  const optionsRef = useRef(null)

  const [dialCode, setDialCode] = useState(defaultCountry.dialCode)
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleClick =()=>{
    setDisplaySelect(prev=>!prev)
  }

  const handleBlur =()=>{
    setDisplaySelect(false)
  }

  useEffect(()=>{
    activeIndex < 1 ? optionsRef.current.children[activeIndex].scrollIntoView() :
    activeIndex === 1 ? optionsRef.current.children[activeIndex-1].scrollIntoView() :
    optionsRef.current.children[activeIndex-2].scrollIntoView()
  })

  const handleSelect =(country, index)=>{
    setActiveIndex(index)
    setSelected(country)
    setDialCode(country.dialCode)
  }

  const selectRef = useCallback(node=>{
    if (node != null){
      node.selectedIndex = activeIndex
  }}, [activeIndex])

  return (
    <SelectContainer tabIndex="0" onBlur={handleBlur} onClick={handleClick}>
      <Select  ref={selectRef}>
        {countriesData.map(i=>{return(<Option>{i.dialCode}</Option>)})}
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
