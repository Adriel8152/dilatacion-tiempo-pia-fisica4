import * as THREE from 'three';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useUserfeedback } from '../hooks';
import { forwardRef, useImperativeHandle, useRef } from 'react';

export const Starship = () => {
	const { scene } = useLoader( GLTFLoader, '/models/starship/scene.gltf' );
	console.log(scene);

	scene.traverse((node) => {
		if (node.isMesh) {
			node.material = new THREE.MeshPhongMaterial({
				color: node.material.color,
				map: node.material.map,
			});
		}
	});

	const mixer = new THREE.AnimationMixer(scene);
	

  useFrame( () => {
    mixer.update( );
  } );


	return (
		<>
			<OrbitControls enableZoom={ false } />

			<primitive object={scene} rotation={[-0.1, Math.PI / 2, 0]} position={[ 0, -0.35, -0.05]} scale={[0.1, 0.1, 0.1]} />
		</>
	)
};

useGLTF.preload('/models/starfield/scene.gltf');