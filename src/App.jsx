import {useState} from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Login from './components/Login'



function App() {
  const [count, setCount] = useState(0)
    return (
      <div>
        <Sidenav />
        <Main />
        <Login />
      </div>
  );
};

export default App;
