import {Routes, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import {InputContextProvider} from  "./contexts/inputContext"


function App() {
  return (
    <InputContextProvider>
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
    </div>
    </InputContextProvider>
  );
}

export default App;
