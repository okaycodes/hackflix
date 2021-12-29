import {Routes, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SignOut from './pages/SignOut'
import LoginHelp from './pages/LoginHelp'



function App() {
  return (
    <div>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />}/>
        <Route exact path={ROUTES.SIGN_IN} element={<SignIn />}/>
        <Route exact path={ROUTES.SIGN_UP} element={<SignUp />}/>
        <Route exact path={ROUTES.SIGN_OUT} element={<SignOut/>}/>
        <Route exact path={ROUTES.SIGN_IN_HELP} element={<LoginHelp/>}/>
        <Route exact path={ROUTES.SELECT_PROFILE} element={<LoginHelp/>}/>
      </Routes>
    </div>
  );
}

export default App;
