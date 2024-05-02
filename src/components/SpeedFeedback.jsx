import { useState } from "react"
import { useEffect } from "react"
import { truncateToDecimals } from "../utils";

export const SpeedFeedback = () => {
	const [speed, setSpeed] = useState( 0 );

	useEffect( () => {
		const intervalId = setInterval( () => {
			const LOCALE_SPEED = ( window.localStorage.getItem( 'speed' ) * 1000 ).toFixed( 1 );

			const SPEED_TRUNCATED = truncateToDecimals( LOCALE_SPEED, 4 );
			
			setSpeed( SPEED_TRUNCATED );
		}, 100 )

		return () => {
			clearInterval( intervalId );
		}
	}, [] )

	return (
		<>
			<div className='info'>
				<div className='aceleration_value'>{ `Velocidad: ${ speed }% la velocidad de la luz` }</div>
			</div>
		</>
	)
}
