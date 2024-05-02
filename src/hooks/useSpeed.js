export const useSpeed = () => {
	const maxSpeed = 0.1;
	let speed = 0;

	const calculateSpeed = ( { aceleration = 0 } ) => {

		if(speed > (-1 * maxSpeed) && speed < maxSpeed) {
			speed += aceleration;
			
			// console.log("Speed: ", speed);
		}

		return speed;
	}

	return {
		calculateSpeed,
	}
}
