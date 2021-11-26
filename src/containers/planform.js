import {PlanForm} from "./../components"
import {useState} from "react"
import plansData from '../fixtures/plans.json';
export default function Planform(){
  const [activeIndex, setActiveIndex] = useState("")
  const handleClick=(index)=>{
    setActiveIndex(index)
  }

  console.log(activeIndex)

  return(
    <PlanForm>
      <PlanForm.Plans>
        <PlanForm.Header>
          <PlanForm.Title></PlanForm.Title>
          {plansData.map((item, index)=>
            <PlanForm.Title onClick={()=>handleClick(index)} isActive={activeIndex===index}>
                {item.title}
            </PlanForm.Title>)}
        </PlanForm.Header>

        <PlanForm.Row>
          <PlanForm.Item>Monthly Price</PlanForm.Item>
          {plansData.map((item, index)=>
            <PlanForm.Item onClick={()=>handleClick(index)} isActive={activeIndex===index}>
              {item.price}
            </PlanForm.Item>)}
        </PlanForm.Row>

        <PlanForm.Row>
          <PlanForm.Item>Video quality</PlanForm.Item>
          {plansData.map((item, index)=>
            <PlanForm.Item onClick={()=>handleClick(index)} isActive={activeIndex===index}>
              {item.quality}
            </PlanForm.Item>)}
        </PlanForm.Row>

        <PlanForm.Row>
          <PlanForm.Item>Resolution</PlanForm.Item>
          {plansData.map((item, index)=>
            <PlanForm.Item onClick={()=>handleClick(index)} isActive={activeIndex===index}>
              {item.resolution}
            </PlanForm.Item>)}
        </PlanForm.Row>

        <PlanForm.Row>
          <PlanForm.Item>Devices you use to watch</PlanForm.Item>
          {plansData.map((item, index)=>{
            return (
              <PlanForm.IconsContainer onClick={()=>handleClick(index)} >
                {item.devices.map(image=>{
                  return (
                    <PlanForm.IconUnit>
                      <PlanForm.Icon src={image.src}  isActive={activeIndex===index}/>
                      <PlanForm.Text isActive={activeIndex===index}>{image.name}</PlanForm.Text>
                    </PlanForm.IconUnit>
                  )})}
              </PlanForm.IconsContainer>
          )})}
        </PlanForm.Row>
      </PlanForm.Plans>
    </PlanForm>
  )}
