import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, Starfield } from './components';

const animations = {
  stop: 0,
  starfield: 1,
  hyperspeed: 2,
}

function App() {
  const [animation, setAnimation] = useState(animations.starfield)

  const [acelerationValue, setAcelerationValue] = useState(0)

  const handleAceleration = (event) => {
    const aceleration = Math.pow((event.target.value / 101), 2);
    
    setAcelerationValue(aceleration);
  };

  return (
    <>
      <Canvas camera={{fov: 75, near: 0.1, far: 5000, position: [0, 0, -1]}} style={{minWidth: '100vw', minHeight: '100vh'}}>
        <color attach="background" args={["black"]} />

        <Suspense fallback={<Loader />}>
          <Starfield animation={animation} animations={animations} acelerationValue={acelerationValue} />
        </Suspense>
      </Canvas>

      <div className='controls'>
        <div className='acelerator'><input type="range" onChange={handleAceleration} defaultValue={0} /></div>
        <div className='aceleration_value'>{ `Aceleración: ${acelerationValue}` }</div>
			</div>
    </>
  );
}

export default App;