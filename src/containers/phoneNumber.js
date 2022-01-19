import { Registration, RegForm, Selectbtn } from "../components";
import { useContext, useState } from "react";
import { formContext } from "../contexts/formContext";

export default function PhoneNumberContainer(){
    const {state} = useContext(formContext)
    const {planPrice} = state
    const [dialCode, setDialCode] = useState("")

    const handleChange =(value)=>{
        setDialCode(value)
    }
    return (
        <Registration maxWidth="500px">
            <Registration.Title>Welcome to Netflix</Registration.Title>
            <Registration.Text>Your Netflix membership has begun at <span>{planPrice}</span> a month.
            You can cancel online at anytime.</Registration.Text>
            <RegForm.ChangePlan style={{flexDirection: "column"}}>
                <Registration.SubTitle>PASSWORD RECOVERY OPTION</Registration.SubTitle>
                <Registration.Text>Your phone number will be used if you forget your
                    password and for important account messages.
                </Registration.Text>
                <Selectbtn handlechange={handleChange}/>
                <RegForm.Checkbox>Yes, I would like to receive text messages with TV show
                    and movie updates, information and special offers from Netflix.
                </RegForm.Checkbox>
            </RegForm.ChangePlan>
        </Registration>

    )
}
