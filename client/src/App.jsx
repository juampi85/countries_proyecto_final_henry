import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import {Home, Landing, Form, Detail} from './views';
import Navbar from './components/Navbar/Navbar';
import ActivitiesContainer from './components/ActivitiesContainer/ActivitiesContainer';

function App() {
  // const [count, setCount] = useState(0)
  const location = useLocation();

  return (
    <>
      <div className="App">
        {location.pathname !== '/' && <Navbar />} {/* acá le indico que esté en TODAS las views EXCEPTO en LANDING*/}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Form />} />
          <Route path="/activities" element={<ActivitiesContainer />} />
          <Route path="/countries/detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
