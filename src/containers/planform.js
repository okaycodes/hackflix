import {PlanForm} from "./../components"
import plansData from "./../fixtures/plans.json"


export default function Planform(){
  return(
    <PlanForm>
      {plansData.map((item, index)=>{
        return(
          <PlanForm.Item>
          <PlanForm.Title>{item.title}</PlanForm.Title>
          <PlanForm.Row>{item.price}</PlanForm.Row>
          <PlanForm.Row>{item.quality}</PlanForm.Row>
          <PlanForm.Row>{item.resolution}</PlanForm.Row>
          <PlanForm.Row>{item.devices}</PlanForm.Row>
        </PlanForm.Item>
        )
      })}
    </PlanForm>
  )}
