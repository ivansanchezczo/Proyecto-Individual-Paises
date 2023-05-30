import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Landing from "./components/Landing/Landing"
import Formulario from "./components/Form/Formulario"
import Home from "./components/Home/Home"



function App() {

  const location = useLocation()

  return (

    <div className="App">
{/* 
      {location.pathname !== "/" && <Nav />} */}

      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/countries/:id" element={<Detail />} /> */}
        <Route path='/activities' element={<Formulario/>} />


      </Routes>


    </div>
  );
}

export default App;