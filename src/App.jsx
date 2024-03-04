import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, Starfield } from './components';

const animations = {
  stop: 0,
  starfield: 1,
  hyperspeed: 2,
}

function App() {
  const [animation, setAnimation] = useState(animations.stop)

  return (
    <>
      <Canvas camera={{fov: 75, near: 0.1, far: 5000, position: [0, 0, -1]}} style={{minWidth: '100vw', minHeight: '100vh'}}>
        <color attach="background" args={["black"]} />

        <Suspense fallback={<Loader />}>
          <Starfield animation={animation} animations={animations} />
        </Suspense>
      </Canvas>

      <div className='controls' style={{position: 'absolute', top: 0, zIndex: 1000,}}>
				<button onClick={() => {setAnimation(animations.stop)}}>Detener</button>
				<button onClick={() => {setAnimation(animations.starfield)}}>Starfield</button>
				<button onClick={() => {setAnimation(animations.hyperspeed)}}>Hyperspeed</button>
			</div>
    </>
  );
}

export default App;