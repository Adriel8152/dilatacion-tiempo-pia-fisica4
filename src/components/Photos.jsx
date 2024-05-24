import React, { useEffect, useState } from 'react';
import n1 from '../assets/persona/n1.jpg';
import n2 from '../assets/persona/n2.jpg';
import n3 from '../assets/persona/n3.jpg';
import n4 from '../assets/persona/n4.jpg';
import n5 from '../assets/persona/n5.jpg';
import n6 from '../assets/persona/n6.jpg';
import n7 from '../assets/persona/n7.jpg';
import t1 from '../assets/persona/t1.jpg';
import t2 from '../assets/persona/t2.jpg';
import t3 from '../assets/persona/t3.jpg';
import t4 from '../assets/persona/t4.jpg';
import t5 from '../assets/persona/t5.jpg';
import t6 from '../assets/persona/t6.jpg';
import t7 from '../assets/persona/t7.jpg';


const startshipPhotos = [ n1, n2, n3, n4, n5, n6, n7 ];
const earthPhotos = [ t1, t2, t3, t4, t5, t6, t7 ];

export function Photos() {
	const [shipTime, setShipTime] = useState( 13 );
	const [earthTime, setEarthTime] = useState( 13 );

	const [shipIsDeath, setShipIsDeath] = useState( false );
	const [earthIsDeath, setEarthIsDeath] = useState( false );

	
	const [shipPhoto, setShipPhoto] = useState( n1 );
	const [earthPhoto, setEarthPhoto] = useState( t1 );
	
	const changeShipPhoto = (age) => {
		if (age < 18) {
			setShipPhoto(n1);
		} else if (age < 30) {
			setShipPhoto(n2);
		} else if (age < 45) {
			setShipPhoto(n3);
		} else if (age < 50) {
			setShipPhoto(n4);
		} else if (age < 65) {
			setShipPhoto(n5);
		} else if (age < 94) {
			setShipPhoto(n6);
		} else if (age >= 95) {
			setShipPhoto(n7);
		}

		if( age > 100 ) setShipIsDeath( true );
	};

	const changeEarthPhoto = (age) => {
		if (age < 18) {
			setEarthPhoto( t1 );
		} else if (age < 30) {
			setEarthPhoto( t2 );
		} else if (age < 45) {
			setEarthPhoto( t3 );
		} else if (age < 50) {
			setEarthPhoto( t4 );
		} else if (age < 65) {
			setEarthPhoto( t5 );
		} else if (age < 94) {
			setEarthPhoto( t6 );
		} else if (age >= 95) {
			setEarthPhoto( t7 );
		}

		if( age > 100 ) setEarthIsDeath( true );
	};

	useEffect( () => {
		
		let intervalId = setInterval( () => {
			if( !shipIsDeath ) setShipTime( window.localStorage.getItem( 'shipTime' ) );
			
			if( !earthIsDeath ) setEarthTime( window.localStorage.getItem( 'earthTime' ) );

			changeShipPhoto( parseInt( window.localStorage.getItem( 'shipTime' ) + 13 ) );
			changeEarthPhoto( parseInt( window.localStorage.getItem( 'earthTime' ) + 13 ) );

		}, 1000 );

		return () => {
			clearInterval( intervalId );
		}
	}, [] )

	return (
		<>
			<div className='photo_container'>
				<div className='photo__item inStarship'>
					<span>En el espacio</span>
					<img className='photo' src={shipPhoto} style={{ filter: shipIsDeath ? 'grayscale(90%) brightness(0.5) blur(0.6px)' : null }} />
					<span>Edad: { parseInt( shipTime )  + 13 } años</span>
					{ shipIsDeath && <span style={{ color: 'red' }}>Muerto</span> }
				</div>

				<span style={{ margin: 6, borderLeft: '1px solid rgba(0,0,0,0.4)' }}></span>

				<div className='photo__item inEarth'>
					<span>En la Tierra</span>
					<img className='photo' src={earthPhoto} style={{ filter: earthIsDeath ? 'grayscale(90%) brightness(0.5) blur(0.6px)' : null }} />
					<span>Edad: { parseInt( earthTime ) + 13} años</span>
					{ earthIsDeath && <span style={{ color: 'red' }}>Muerto</span> }
				</div>
			</div>
		</>
	);
}

export default Photos;