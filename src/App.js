import {Routes, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes';
import Home from './pages/Home'


function App() {
  return (
    <div>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
