import {Routes, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SignOut from './pages/SignOut'
import LoginHelp from './pages/LoginHelp'
import NotFound from './pages/NotFound'
import {authContext} from "./contexts/authContext"
import {useContext} from "react"

import {SelectContextProvider} from "./contexts/selectContext"
import RegistrationContainer from "./containers/registration"
import RegFormContainer from "./containers/regform"
import RegStepContainer from "./containers/regstep"
import PlanFormContainer from "./containers/planform"
import PaymentStepContainer from "./containers/payment"
import PaymentFormContainer from "./containers/paymentform"
import PhoneNumberContainer from './containers/phoneNumber';

function App() {
const {isAuthenticating} = useContext(authContext)

  return ( 
    <div>
      { !isAuthenticating &&
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}/>
        <Route path={ROUTES.SIGN_IN} element={<SignIn />}/>
        <Route path="signup" element={<SignUp />}>
          <Route index element={<RegStepContainer />} />
          <Route path="registration" element={<RegistrationContainer />}/>
          <Route path="payment-form" element={<PaymentFormContainer />}/>
          <Route path="planform" element={<PlanFormContainer />} />
          <Route path="payment" element={<PaymentStepContainer />} />
          <Route path="regform" element={<RegFormContainer />} />
          <Route path="phoneNumber" element={
            <SelectContextProvider>
              <PhoneNumberContainer />
            </SelectContextProvider>   
          }/>
        </Route>
        <Route path={ROUTES.SIGN_OUT} element={<SignOut/>}/>
        <Route path={ROUTES.SIGN_IN_HELP} element={
          <SelectContextProvider>
              <LoginHelp/>
          </SelectContextProvider>}/>
        <Route path={ROUTES.SELECT_PROFILE} element={<LoginHelp/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>}
    </div>
  );
}

export default App;
