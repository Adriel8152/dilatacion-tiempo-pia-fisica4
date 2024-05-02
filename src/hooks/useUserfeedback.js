export const useUserfeedback = () => {
	const maxSpeed = 0.0999;
	let speed = 0;
	let loadTime = Date.now();


	const calculateSpeed = ( { aceleration = 0 } ) => {

		speed += aceleration;

	  speed = Math.max(-maxSpeed, Math.min(maxSpeed, speed));

		return speed;
	};


	const getShipElapsedTime = () => {
			let currentTime = Date.now();
			let elapsedTime = (currentTime - loadTime) / 1000; // Convertir de milisegundos a segundos
			return elapsedTime;
	};

	const getEarthElapsedTime = ( shipTime, shipSpeed ) => {		
		return shipTime / Math.sqrt( 1 - Math.pow( ( shipSpeed / 100 ), 2 ) );
	}

	return {
		calculateSpeed,
		getShipElapsedTime,
		getEarthElapsedTime,
	};

}
