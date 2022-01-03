import {PlanForm, Registration} from "./../components"
import {useState, useContext, useEffect} from "react"
import plansData from '../fixtures/plans.json';
import * as ROUTES from "./../constants/routes"
import {formContext} from "./../contexts/formContext"
import {getFirestore, doc, setDoc} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {useNavigate} from "react-router-dom"
// import {getAuth} from 'firebase/auth'



export default function Planform(){
  const checkList = ["Watch all you want. Ad-free.", "Recommendations just for you.",
    "Change or cancel your plan anytime."]
  const {state, dispatch} = useContext(formContext)
  const {planName, planPrice} = state
  const [activeIndex, setActiveIndex] = useState(3)
  const [uid, setUid] = useState("")

  const handleClick=(index)=>{
    setActiveIndex(index)
  }

  const auth = getAuth()

  useEffect(()=>{
    dispatch({type:"savePlan", payload:{name:"Premium", price:"₦4,400"}})
  },[dispatch])

  useEffect(()=>{
    auth.currentUser != null && setUid(auth.currentUser.uid)
  }, [auth.currentUser])

  const navigate = useNavigate()
  const db = getFirestore()


  const handleSubmit =()=>{
    if(!uid){
      navigate(`./../../${ROUTES.REGISTRATION}`)
    }else{
      const userRef = doc(db, 'users', uid);
      setDoc(userRef, {planName, planPrice, currentStepUrl: ROUTES.PAYMENT_STEP}, {merge:true})
      localStorage.setItem("currentStepUrl", ROUTES.PAYMENT_STEP)
      navigate(`./../../${ROUTES.PAYMENT_STEP}`)
    }
  }


  return(
    <PlanForm>
      <PlanForm.StepContainer>
        <Registration.Title>Choose the plan that's right for you.</Registration.Title>
        <Registration.List>
        {checkList.map(item => {
          return(
            <Registration.ListItem marginTop=".5em">
              <Registration.ListIcon src="./../../images/icons/check-mark-line.svg"/>
              <Registration.ListText>{item}</Registration.ListText>
            </Registration.ListItem>
          )
        })}
        </Registration.List>
      </PlanForm.StepContainer>
      <PlanForm.Plans>
        <PlanForm.Header>
          <PlanForm.Title></PlanForm.Title>
          {plansData.map((item, index)=>
            <PlanForm.Title
              isActive={activeIndex===index}
              onClick={()=>{
                handleClick(index)
                dispatch({type:"savePlan", payload:{name:item.title, price:item.price}})
            }}>
                {item.title}
            </PlanForm.Title>)}
        </PlanForm.Header>

        <PlanForm.Row>
          <PlanForm.Item color="black">Monthly Price</PlanForm.Item>
          {plansData.map((item, index)=>
            <PlanForm.Item
              isActive={activeIndex===index}
              onClick={()=>{
                handleClick(index)
                dispatch({type:"savePlan", payload:{name:item.title, price:item.price}})
            }}>
              {item.price}
            </PlanForm.Item>)}
        </PlanForm.Row>

        <PlanForm.Row>
          <PlanForm.Item color="black">Video quality</PlanForm.Item>
          {plansData.map((item, index)=>
            <PlanForm.Item
              isActive={activeIndex===index}
              onClick={()=>{
                handleClick(index)
                dispatch({type:"savePlan", payload:{name:item.title, price:item.price}})
            }}>
              {item.quality}
            </PlanForm.Item>)}
        </PlanForm.Row>

        <PlanForm.Row>
          <PlanForm.Item color="black">Resolution</PlanForm.Item>
          {plansData.map((item, index)=>
            <PlanForm.Item
              isActive={activeIndex===index}
              onClick={()=>{
                handleClick(index)
                dispatch({type:"savePlan", payload:{name:item.title, price:item.price}})
            }}>
              {item.resolution}
            </PlanForm.Item>)}
        </PlanForm.Row>

        <PlanForm.Row>
          <PlanForm.Item color="black">Devices you use to watch</PlanForm.Item>
          {plansData.map((item, index)=>{
            return (
              <PlanForm.IconsContainer
                onClick={()=>{handleClick(index)
                dispatch({type:"savePlan", payload:{name:item.title, price:item.price}})
              }}>
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
      <PlanForm.ButtonLink onClick={handleSubmit}>Next</PlanForm.ButtonLink>
    </PlanForm>
  )}
