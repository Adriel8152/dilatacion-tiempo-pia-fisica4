export const useTutorialsteps = () => {
	const steps = [
		{
			element: '#controls',
			intro:
				<>
					<p>¡Hola y bienvenido al Simulador de Viaje Espacial! 🚀</p>
					<br />
					<p>Estamos emocionados de tenerte a bordo 👩‍🚀.</p>
					<br />
					<p>A continuación, te mostraremos las características de tu nave espacial para que estés listo para despegar.</p>
				</>,
			tooltipClass: 'tutorial'
		},
		{
			element: '#acelerator',
			position: 'right',
			intro: 
				<>
					<p>¡Aquí está tu acelerador para el viaje!</p>
					<br />
					<p>Tú tienes el control total sobre la velocidad de tu nave espacial.</p>
					<br />
					<p>¡Pero ten cuidado! Puedes alcanzar altas velocidades, ¡incluso acercarte a la velocidad de la luz! 😵‍💫</p>
				</>,
			tooltipClass: 'tutorial'
		},
		{
			element: '.info',
			intro:
				<>
					<p>¡Este panel tiene información importante! ¡Presta atención!</p>
					<br />
					<ul>
						<li><strong>Velocidad:</strong> Es tu velocidad medida en porcentaje de la velocidad de la luz.</li>
						<br />
						<li><strong>Años en la Nave:</strong> Indica cuánto tiempo has pasado en la nave espacial.</li>
						<br />
						<li><strong>Años en la Tierra:</strong> Muestra cuánto tiempo ha pasado en la Tierra.</li>
					</ul>
					<br />
					<p>Es normal que el tiempo pase más rápido en la Tierra que en la nave. ¡A esto se le llama <i>Dilatación del Tiempo</i>! 🤓</p>
				</>,
			tooltipClass: 'tutorial'
		},
		{
			element: '.footer',
			position: 'right',
			intro:
				<>
					<p>En la parte inferior, encontrarás información adicional que podría interesarte.</p>
					<br />
					<p>¡Incluso podrás aprender más sobre el fenómeno de la dilatación del tiempo!</p>
				</>,
			tooltipClass: 'tutorial'
		},
		{
			element: '#controls',
			intro:
				<>
					<p>¡Recuerda que puedes explorar el espacio haciendo clic en la pantalla y arrastrando el cursor!</p>
					<br />
					<p>Para una experiencia óptima, te recomendamos abrir esta aplicación en una computadora.</p>
					<br />
					<p>¡Todo está listo para el despegue! ¡Procede con la aceleración de la nave y nos vemos pronto en el espacio! 🫡</p>
				</>,
			tooltipClass: 'tutorial'
		},
	];

	return {
		steps,
	}
}
