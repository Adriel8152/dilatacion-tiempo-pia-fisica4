export const useSpeed = () => {
	const maxSpeed = 0.099999;
	let speed = 0;


	const calculateSpeed = ( { aceleration = 0 } ) => {

		speed += aceleration;

	  speed = Math.max(-maxSpeed, Math.min(maxSpeed, speed));

		return speed;
	}

	return {
		calculateSpeed,
	}
}
