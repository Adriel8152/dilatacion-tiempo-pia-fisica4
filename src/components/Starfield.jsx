import * as THREE from 'three';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const Starfield = ( props ) => {
	const { scene, animations } = useLoader( GLTFLoader, '/models/starfield/scene.gltf' );

	const mixer = new THREE.AnimationMixer(scene);
  const starfieldAnimation = mixer.clipAction(animations[0]);
  const hyperspeedAnimation = mixer.clipAction(animations[1]);

	let actualState = null;


  useFrame((state, delta, frame) => {

		// if( props.animation === props.animations.stop )  {
		// 	starfieldAnimation.stop();
		// 	hyperspeedAnimation.stop();
		// }

		// if( props.animation === props.animations.starfield ) {
		// 	hyperspeedAnimation.stop();
		// 	starfieldAnimation.play();
		// }

		// if( props.animation === props.animations.hyperspeed ) {
		// 	starfieldAnimation.stop();
		// 	hyperspeedAnimation.play();
		// }

		starfieldAnimation.play();

		// starfieldAnimation.startAt(1)

		// starfieldAnimation.timeScale = props.acelerationValue;
		// if( state !== actualState ) {
		// 	actualState = state;
		// 	// console.log("State: ", actualState);
		// 	// console.log("Delta: ", delta);
		// 	console.log("Frame: ", frame);
		// 	console.log("StarfieldAnimation: ", starfieldAnimation);
		// }

    mixer.update( props.acelerationValue );
  });


	return (
		<>
			<OrbitControls />

			<primitive object={scene} />
		</>
	)
}

useGLTF.preload('/models/starfield/scene.gltf');