import {PlanForm} from "./../components"
import {useState} from "react"
import plansData from '../fixtures/plans.json';
import {Registration} from "./../components"
import * as ROUTES from "./../constants/routes"



export default function Planform(){
  const checkList = ["Watch all you want. Ad-free.", "Recommendations just for you.",
    "Change or cancel your plan anytime."]
  const [activeIndex, setActiveIndex] = useState("")
  const handleClick=(index)=>{
    setActiveIndex(index)
  }

  return(
    <PlanForm>
      <PlanForm.StepContainer>
        <Registration.Title>Choose the plan that's right for you.</Registration.Title>
        <Registration.SubTitle style={{textAlign: "left"}}>
          step <span style={{fontWeight: "bold"}}>2</span> of <span style={{fontWeight: "bold"}}>3</span>
        </Registration.SubTitle>
        <Registration.List>
        {checkList.map(item => {
          return(
            <Registration.ListItem style={{marginTop: ".5em"}}>
              <Registration.Icon src="./../../images/icons/check-mark-line.svg"/>
              <Registration.Text style={{marginTop:0}}>{item}</Registration.Text>
            </Registration.ListItem>
          )
        })}
        </Registration.List>
      </PlanForm.StepContainer>
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
      <PlanForm.Terms>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
       subject to your internet service and device capabilities. Not all content is
       available in all resolutions. See our <PlanForm.Link to="#">Terms of Use </PlanForm.Link>
        for more details.</PlanForm.Terms>
      <PlanForm.Terms>Only people who live with you may use your account. Watch on
       4 different devices at the same time with Premium, 2 with Standard, and 1
       with Basic and Mobile.</PlanForm.Terms>
      <PlanForm.ButtonLink to={`./../../${ROUTES.PAYMENT_STEP}`}>Next</PlanForm.ButtonLink>
    </PlanForm>
  )}
