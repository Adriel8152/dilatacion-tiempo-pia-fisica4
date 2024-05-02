import { useState, useEffect } from "react"
import { truncateToDecimals } from "../utils";
import { useUserfeedback } from "../hooks";

export const UserFeedback = () => {
	const { getShipElapsedTime, getEarthElapsedTime } = useUserfeedback();

	const [speed, setSpeed] = useState( 0 );
	const [shipTime, setShipTime] = useState( 0 )
	const [earthTime, setEarthTime] = useState( 0 )

	useEffect( () => {
		const intervalId = setInterval( () => {
			const LOCALE_SPEED = ( window.localStorage.getItem( 'speed' ) * 1000 );

			const SPEED_TRUNCATED = truncateToDecimals( LOCALE_SPEED.toFixed( 1 ), 4 );
			
			setSpeed( SPEED_TRUNCATED );

			setShipTime( getShipElapsedTime() );

			setEarthTime(getEarthElapsedTime( parseInt(getShipElapsedTime()), parseFloat(LOCALE_SPEED) ));

			// console.log( 'getShipElapsedtime', parseInt( getShipElapsedTime() ) );
			// console.log( 'LOCALE_SPEED', parseInt( LOCALE_SPEED ) );

		}, 100 )

		return () => {
			clearInterval( intervalId );
		}
	}, [] )

	return (
		<>
			<div className='info'>
				<div className='aceleration_value'>{ `Velocidad: ${ speed }% la velocidad de la luz` }</div>
				<div>{`Años transcurridos en la Nave: ${ parseInt( shipTime ).toFixed() } `}</div>
				<div>{`Años transcurridos en la Tierra: ${ parseInt( earthTime ).toFixed() } `}</div>
			</div>
		</>
	)
}
