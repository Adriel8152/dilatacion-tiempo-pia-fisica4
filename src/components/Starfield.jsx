import * as THREE from 'three';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Starfield = ( props ) => {
	const { scene, animations } = useLoader( GLTFLoader, '/models/starfield/scene.gltf' );

	const mixer = new THREE.AnimationMixer(scene);
  const starfieldAnimation = mixer.clipAction(animations[0]);
  const hyperspeedAnimation = mixer.clipAction(animations[1]);


  useFrame((state, delta) => {

		if(props.animation === props.animations.stop)  {
			starfieldAnimation.stop();
			hyperspeedAnimation.stop();
		}

		if(props.animation === props.animations.starfield) {
			hyperspeedAnimation.stop();
			starfieldAnimation.play();
		}

		if(props.animation === props.animations.hyperspeed) {
			starfieldAnimation.stop();
			hyperspeedAnimation.play();
		}

    mixer.update(delta);
  });


	return (
		<>
			<OrbitControls />

			<primitive object={scene} />
		</>
	)
}

useGLTF.preload('/models/starfield/scene.gltf');