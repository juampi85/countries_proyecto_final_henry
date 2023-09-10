import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import {Home, Landing, Form, Detail} from './views';
import Navbar from './components/Navbar/Navbar';
import ActivitiesContainer from './components/ActivitiesContainer/ActivitiesContainer';
import Footer from './components/Footer/Footer';
import Error from './views/Error/Error';


function App() {
  const location = useLocation();

  return (
    <>
      <div className="App">
        {location.pathname !== '/' && <Navbar />}{' '}
        {/* acá arriba le indico que esté en TODAS las views EXCEPTO en LANDING*/}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Form />} />
          <Route path="/activities" element={<ActivitiesContainer />} />
          <Route path="/countries/detail/:id" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {location.pathname !== '/' && <Footer />} { /* acá, al igual que con la Navbar, le digo que NO aparezca si estamosn en la Landing */}
      </div>
    </>
  );
}

export default App;