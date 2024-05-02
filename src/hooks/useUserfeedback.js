export const useUserfeedback = () => {
	const maxSpeed = 0.0999;
	let speed = 0;
	let loadTime = Date.now();
	let earthTime = 0;


	const calculateSpeed = ( { aceleration = 0 } ) => {

		speed += aceleration;

		// console.log('speed', speed);

	  speed = Math.max(-maxSpeed, Math.min(maxSpeed, speed));

		return speed;
	};


	const getShipElapsedTime = () => {
			let currentTime = Date.now();
			let elapsedTime = (currentTime - loadTime) / 1000; // Convertir de milisegundos a segundos
			return elapsedTime;
	};
	
	let lastShipTime = 0;

	const getEarthElapsedTime = (shipTime, shipSpeed) => {
		const intervalTime = shipTime - lastShipTime;
		lastShipTime = shipTime;
		const dilatedTime = intervalTime / Math.sqrt(1 - Math.pow((shipSpeed / 100), 2));
		earthTime += dilatedTime;
		return earthTime;
	}

	return {
		calculateSpeed,
		getShipElapsedTime,
		getEarthElapsedTime,
	};

}
