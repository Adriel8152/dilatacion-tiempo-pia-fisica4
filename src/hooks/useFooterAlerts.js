import Swal from "sweetalert2"

export const useFooterAlerts = () => {
	const handleAboutSimulator = () => {
		Swal.fire({
			title: 'Sobre el simulador',
			html: `
				<p style="text-align: justify">¡Bienvenido al simulador del fenómeno de la dilatación del tiempo!</p>
				<br />
				<p style="text-align: justify">En este espacio, podrá experimentar de manera interactiva cómo el tiempo se comporta de manera diferente cuando se acerca a velocidades cercanas a la de la luz, mientras disfruta de una experiencia visualmente impresionante.</p>
				<br />
				<hr />
				<br />
				<h4>Información para nerds. 🤓🖥️</h4>
				<p style="text-align: justify">Si está interesado en conocer las tecnologías que hicieron posible este proyecto, se presentan a continuación:</p>
				<br />
				<ul>
					<li style="text-align: left"> - JavaScript 🟡</li>
					<li style="text-align: left"> - React.js ⚛️</li>
					<li style="text-align: left"> - Vite ⚡</li>
					<li style="text-align: left"> - Nativefier</li>
					<li style="text-align: left"> - Three.js / React Three Fiber </li>
					<li style="text-align: left"> - (Mención adicional a Intro.js y Swal)</li>
				</ul>
				<br />
				<p style="text-align: justify">¡Y eso no es todo! Si quiere explorar más, puede acceder al repositorio del proyecto a través de este enlace:</p>
				<br />
				<p style="text-align: justify"><a href="#">Link al repositorio</a></p>
			`,
			customClass: {
				confirmButton: 'confirmButton',
			}
		});
	};
	
	const handleAboutUs = () => {
		Swal.fire({
			title: '¿Quiénes estamos detrás?',
			html: `
				<p style="text-align: justify">¡Hola! Somos un grupo de estudiantes de la Facultad de Ingeniería Mecánica y Eléctrica de la Universidad Autónoma de Nuevo León, y estamos contentos de presentar este proyecto.</p>
				<br />
				<p style="text-align: justify">¡Nuestro grupo de desarrollo estuvo conformado por piezas indispensables!</p>
				<br />
				<table style="width: 100%">
					<tr>
						<th style="text-align: left">Actividad</th>
						<th style="text-align: left">Nombre</th>
						<th style="text-align: left">Matrícula</th>
					</tr>
					<tr>
						<td style="text-align: left">Lead Developer</td>
						<td style="text-align: left">Adriel Morales</td>
						<td style="text-align: left">1872484</td>
					</tr>
					<tr>
						<td style="text-align: left">Developer</td>
						<td style="text-align: left">Ivan Wong</td>
						<td style="text-align: left"> - </td>
					</tr>
					<tr>
						<td style="text-align: left">Developer</td>
						<td style="text-align: left">Rogelio Villa</td>
						<td style="text-align: left"> - </td>
					</tr>
					<tr>
						<td style="text-align: left">Tech Scout</td>
						<td style="text-align: left">Alan Hernández</td>
						<td style="text-align: left">2127961</td>
					</tr>
					<tr>
						<td style="text-align: left">App tester</td>
						<td style="text-align: left">Gael Guerrero</td>
						<td style="text-align: left">2003509</td>
					</tr>
				</table>
			`,
			customClass: {
				confirmButton: 'confirmButton',
			}
		});
	};

	const handleMoreInfo = () => {
		Swal.fire({
			title: 'Conoce más',
			html: `
				<p style="text-align: justify">¡La dilatación del tiempo es muy interesante!</p>
				<br />
				<p style="text-align: justify">Puedes aprender más en los siguientes enlaces:</p>
				<br />
				<ul>
					<li style="text-align: left"><a target="_blank" rel="noopener noreferrer" href="https://www.nationalgeographicla.com/espacio/2022/10/dilatacion-del-tiempo-conoce-de-que-se-trata-y-si-es-posible-viajar-al-futuro">(National Geographic) Dilatación del tiempo: conoce...</a></li>
					<br />
					<li style="text-align: left"><a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Dilataci%C3%B3n_del_tiempo">(Wikipedia) Dilatación del tiempo</a></li>
				</ul>
			`,
			customClass: {
				confirmButton: 'confirmButton',
			}
		});
	};
	
	return {
		handleAboutSimulator,
		handleAboutUs,
		handleMoreInfo
	}
}
