import {SelectContainer, Select, Option, Selected, SelectItems, SelectItem,
        Flag, SelectText, DialCode} from "./styles/selectbtn"
import {useRef, useEffect, useState, useCallback} from "react"
import countriesData from "./../../fixtures/countries_data.json"



export default function Selectbtn(){
  const [selected, setSelected] = useState("")
  const [selectItems, setSelectItems] = useState("")
  const [displaySelect, setDisplaySelect] = useState(false)
  const optionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState("3")
  console.log(activeIndex)

  const handleSelect =(node, country, index)=>{
    node.selectedIndex = index
    setActiveIndex(index)
    setSelected(
      <Selected>
        <Flag src={country.flag} alt={country.name} />
        <SelectText>{country.dialCode}</SelectText>
      </Selected>
    )
  }


  const selectRef = useCallback(node=>{
    if (node != null){
      const defaultCountry = countriesData.find(i=>i.dialCode === "+234")
      const defaultIndex = countriesData.indexOf(defaultCountry)
      node.selectedIndex = defaultIndex
      setActiveIndex(defaultIndex)

      setSelected(
        <Selected>
          <Flag src={defaultCountry.flag} alt={defaultCountry.name} />
          <SelectText>{defaultCountry.dialCode}</SelectText>
        </Selected>
      )
      setSelectItems(countriesData.map((country, index)=>{
        return (
        <SelectItem key={index} isActive={index===activeIndex} onClick={()=>handleSelect(node, country, index)}>
          <Flag src={country.flag} alt={country.name} />
          <SelectText>{country.name}</SelectText>
          <DialCode>{country.dialCode}</DialCode>
        </SelectItem>)
      }))
    }
  }, [])

  const handleClick =()=>{
    setDisplaySelect(prev=>!prev)
  }

  const handleBlur =()=>{
    setDisplaySelect(false)
  }

  return (
    <SelectContainer tabIndex="0" onBlur={handleBlur} onClick={handleClick}>
      <Select  ref={selectRef} onChange={(e)=>console.log("changed")}>
        {countriesData.map(i=>{return(<Option>{i.dialCode}</Option>)})}
      </Select>
      {selected}
      <SelectItems displaySelect={displaySelect}>{selectItems}</SelectItems>
    </SelectContainer>
)}
