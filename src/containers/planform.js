import {PlanForm} from "./../components"
import {useState} from "react"
import plansData from '../fixtures/plans.json';
export default function Planform(){
  const [activeIndex, setActiveIndex] = useState("")
  const handleClick=(id)=>{
    setActiveIndex(id)
  }

  console.log(activeIndex)

  return(
    <PlanForm>
      <PlanForm.Header>
        {plansData.map((item, index)=>{
          return(
          <PlanForm.Title
            onClick={()=>handleClick(index)}
            isActive={activeIndex===index}
          >
              {item.title}
          </PlanForm.Title>
        )})}
      </PlanForm.Header>

      <PlanForm.Row>
        <PlanForm.Item>Monthly Price</PlanForm.Item>
        <PlanForm.Item>₦1,200</PlanForm.Item>
        <PlanForm.Item>₦2,900</PlanForm.Item>
        <PlanForm.Item>₦3,600</PlanForm.Item>
        <PlanForm.Item>₦4,400</PlanForm.Item>
      </PlanForm.Row>

      <PlanForm.Row>
        <PlanForm.Item>Video quality</PlanForm.Item>
        <PlanForm.Item>Good</PlanForm.Item>
        <PlanForm.Item>Good</PlanForm.Item>
        <PlanForm.Item>Better</PlanForm.Item>
        <PlanForm.Item>best</PlanForm.Item>
      </PlanForm.Row>

      <PlanForm.Row>
        <PlanForm.Item>Resolution</PlanForm.Item>
        <PlanForm.Item>480p</PlanForm.Item>
        <PlanForm.Item>480p</PlanForm.Item>
        <PlanForm.Item>1080p</PlanForm.Item>
        <PlanForm.Item>4K+HDR</PlanForm.Item>
      </PlanForm.Row>

      <PlanForm.Row>
        <PlanForm.Item>Devices you use to watch</PlanForm.Item>
        <PlanForm.Icon src="/images/icons/design.png" />
        <PlanForm.Icon src="/images/icons/design2.png" />
        <PlanForm.Icon src="/images/icons/design2.png" />
        <PlanForm.Icon src="/images/icons/design2.png" />
      </PlanForm.Row>
    </PlanForm>
  )}
