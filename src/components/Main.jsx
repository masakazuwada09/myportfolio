import Spline from '@splinetool/react-spline';
import { useRef } from 'react';


function App() {
  const cube = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName('Cube');
    console.log('load', { spline, obj });
    cube.current = obj;
  }

  function moveObj() {
    cube.current.position.x += 50;
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Spline
        scene="https://prod.spline.design/ycz48U57iIj0uNyI/scene.splinecode"
        onLoad={onLoad}
      />
    </div>

  );
}

export default App;
