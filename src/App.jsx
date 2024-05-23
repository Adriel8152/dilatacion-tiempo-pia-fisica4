import { Suspense, useRef, useState, useLayoutEffect, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Controls, Loader, Starfield, UserFeedback, Footer, Starship } from './components';
import { Steps } from 'intro.js-react';
import { useTutorialsteps } from './hooks';

function App() {
  const [showTutorial, setShowTutorial] = useState( false );
  const [startTime, setStartTime] = useState( false );
  const starfieldRef = useRef();
  const { steps } = useTutorialsteps();

  const handleAcelerationChange = (event) => {
    const aceleratorInput = event.target;

    starfieldRef.current.updateAceleration( ( aceleratorInput.value / 1000000) - 0.00005 );
  };

  const handleCloseTutorial = () => {
    setShowTutorial( false );
    setStartTime( true );
  }

  useEffect( () => {
    setShowTutorial( true );
  }, [] );


  return (
    <>
      <Steps
        enabled={ showTutorial }
        steps={ steps }
        initialStep={ 0 }
        onChange={ prevStep => prevStep + 1 }
        onExit={ handleCloseTutorial }
      />

      <UserFeedback startTime={ startTime } />

      <Canvas camera={{fov: 75, near: 0.1, far: 5000, position: [0, 0, -1]}} style={{width: '100vw', height: '100vh'}}>
        <color attach="background" args={["black"]} />
        <pointLight position={[0, 0.3, -0.35]} />

        <Suspense fallback={<Loader />}>
          <Starfield ref={ starfieldRef } />
          <Starship />
        </Suspense>
      </Canvas>

      <Controls handleAcelerationChange={ handleAcelerationChange } />
      <Footer />
    </>
  );
}

export default App;