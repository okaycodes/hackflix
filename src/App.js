import {Routes, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SignOut from './pages/SignOut'


function App() {
  return (
    <div>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />}/>
      </Routes>
      <Routes>
        <Route exact path={ROUTES.SIGN_IN} element={<SignIn />}/>
      </Routes>
      <Routes>
        <Route exact path={ROUTES.SIGN_UP} element={<SignUp />}/>
      </Routes>
      <Routes>
        <Route exact path={ROUTES.SIGN_OUT} element={<SignOut/>}/>
      </Routes>
    </div>
  );
}

export default App;
