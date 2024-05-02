export const Controls = ({ handleAcelerationChange }) => {
	return (
		<div id='controls'>
			<div className='acelerator_container'><input id='acelerator' type="range" onChange={ handleAcelerationChange } defaultValue={50} /></div>
		</div>
	)
}
