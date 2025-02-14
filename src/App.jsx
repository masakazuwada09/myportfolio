import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Work from '../pages/Work';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Spline from '@splinetool/react-spline';
import { useRef } from 'react';

const App = () => {
  const cube = useRef(null);

  function onLoad(spline) {
    const obj = spline.findObjectByName('Cube');
    cube.current = obj;
  }

  function moveObj() {
    if (cube.current) {
      cube.current.position.x += 50;
    }
  }

  return (
    <Router>
      <Sidenav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </Router>
  );
};

export default App;
