import * as THREE from 'three';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSpeed } from '../hooks';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const Starfield = forwardRef(( { currentAnimation, playableAnimations, onChangeSpeed }, ref ) => {
	const { scene, animations } = useLoader( GLTFLoader, '/models/starfield/scene.gltf' );
	const { calculateSpeed } = useSpeed();

	const acelerationRef = useRef(0);

	const mixer = new THREE.AnimationMixer(scene);
  const starfieldAnimation = mixer.clipAction(animations[0]);
  const hyperspeedAnimation = mixer.clipAction(animations[1]);

	useImperativeHandle(ref, () => ({
    updateAceleration: (newAceleration) => {
      acelerationRef.current = newAceleration;
    },
  }));
	

  useFrame((state, delta, frame) => {
		const speed = calculateSpeed( { aceleration: acelerationRef.current } );

		onChangeSpeed(speed);
		
		starfieldAnimation.play();
		
    mixer.update( speed );
  });


	return (
		<>
			<OrbitControls />

			<primitive object={scene} />
		</>
	)
});

useGLTF.preload('/models/starfield/scene.gltf');

export default Starfield;