import Swal from "sweetalert2"
import { useFooterAlerts } from "../hooks/useFooterAlerts"



export const Footer = () => {

	const { handleAboutSimulator, handleAboutUs, handleMoreInfo } = useFooterAlerts();

	return (
		<footer className='footer'>
			<p onClick={ handleAboutSimulator }>Sobre el simulador</p>
			<p onClick={ handleAboutUs }>Sobre nosotros</p>
			<p onClick={ handleMoreInfo }>¡Quiero saber más!</p>
		</footer>
	)
}
