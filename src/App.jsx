import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Controls, Loader, Starfield, SpeedFeedback } from './components';
import { playableAnimations } from './utils';

function App() {
  const starfieldRef = useRef();


  const handleAcelerationChange = (event) => {
    const aceleratorInput = event.target;

    starfieldRef.current.updateAceleration( ( aceleratorInput.value / 10000000) - 0.000005 );
  };


  return (
    <>
      <SpeedFeedback />

      <Canvas camera={{fov: 75, near: 0.1, far: 5000, position: [0, 0, -1]}} style={{minWidth: '100vw', minHeight: '100vh'}}>
        <color attach="background" args={["black"]} />

        <Suspense fallback={<Loader />}>
          <Starfield ref={ starfieldRef } currentAnimation={ playableAnimations.starfield } animations={ playableAnimations } />
        </Suspense>
      </Canvas>

      <Controls handleAcelerationChange={ handleAcelerationChange } />
    </>
  );
}

export default App;