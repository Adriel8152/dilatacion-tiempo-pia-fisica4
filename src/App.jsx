import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Controls, Loader, Starfield, UserFeedback, Footer } from './components';

function App() {
  const starfieldRef = useRef();

  const handleAcelerationChange = (event) => {
    const aceleratorInput = event.target;

    starfieldRef.current.updateAceleration( ( aceleratorInput.value / 1000000) - 0.00005 );
  };


  return (
    <>
      <UserFeedback />

      <Canvas camera={{fov: 75, near: 0.1, far: 5000, position: [0, 0, -1]}} style={{width: '100vw', height: '100vh'}}>
        <color attach="background" args={["black"]} />

        <Suspense fallback={<Loader />}>
          <Starfield ref={ starfieldRef } />
        </Suspense>
      </Canvas>

      <Controls handleAcelerationChange={ handleAcelerationChange } />
      <Footer />
    </>
  );
}

export default App;