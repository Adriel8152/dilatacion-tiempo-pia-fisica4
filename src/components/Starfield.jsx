import * as THREE from 'three';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useUserfeedback } from '../hooks';
import { forwardRef, useImperativeHandle, useRef } from 'react';

export const Starfield = forwardRef(( {}, ref ) => {
	const { scene, animations } = useLoader( GLTFLoader, '/models/starfield/scene.gltf' );
	const { calculateSpeed } = useUserfeedback();

	const acelerationRef = useRef(0);

	const mixer = new THREE.AnimationMixer(scene);
  const starfieldAnimation = mixer.clipAction(animations[0]);
  const hyperspeedAnimation = mixer.clipAction(animations[1]);

	useImperativeHandle(ref, () => ({
    updateAceleration: (newAceleration) => {
      acelerationRef.current = newAceleration;
    },
  }));
	

  useFrame( () => {
		const LOCALE_SPEED = calculateSpeed( { aceleration: acelerationRef.current } );

		window.localStorage.setItem('speed', LOCALE_SPEED);
		
		starfieldAnimation.play();
		
    mixer.update( LOCALE_SPEED );
  } );


	return (
		<>
			<OrbitControls enableZoom={ false } />

			<primitive object={scene} />
		</>
	)
});

useGLTF.preload('/models/starfield/scene.gltf');