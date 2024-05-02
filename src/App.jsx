import { Suspense, useEffect, useRef, useState, useImperativeHandle } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from './components';
import Starfield from './components/Starfield';

const playableAnimations = {
  stop: 0,
  starfield: 1,
  hyperspeed: 2,
}

function App() {
  const [currentAnimation, setCurrentAnimation] = useState( playableAnimations.starfield )
  // const [aceleration, setAceleration] = useState( 0 );
  const acelerationRef = useRef( 0 );
  const starfieldRef = useRef();
  // const [speed, setSpeed] = useState( 0 )

  // const { calculateSpeed } = useSpeed();


  // let speed = 0;
  const speedRef = useRef(0);

  const handleAceleration = (event) => {
    const aceleratorInput = event.target.value;
    // setAceleration( ( event.target.value / 1000000) - 0.00005 );
    // acelerationRef.current = ( event.target.value / 1000000) - 0.00005;
    // console.log(acelerationRef.current);
    starfieldRef.current.updateAceleration( ( aceleratorInput / 10000000) - 0.000005 );
  };

  const onChangeSpeed = (speedParam) => {
    speedRef.current = speedParam;

    // setSpeed((previousSpeed) => speedParam);
  }




  return (
    <>
      <Canvas camera={{fov: 75, near: 0.1, far: 5000, position: [0, 0, -1]}} style={{minWidth: '100vw', minHeight: '100vh'}}>
        <color attach="background" args={["black"]} />

        <Suspense fallback={<Loader />}>
          <Starfield ref={ starfieldRef } currentAnimation={ currentAnimation } animations={ playableAnimations } aceleration={ acelerationRef.current } onChangeSpeed={ onChangeSpeed } />
        </Suspense>
      </Canvas>

      <div className='controls'>
        <div className='acelerator'><input type="range" onChange={ handleAceleration } defaultValue={50} /></div>
        <div className='aceleration_value'>{ `Velocidad: ${ 0 }% la velocidad de la luz` }</div>
			</div>
    </>
  );
}

export default App;