export const Controls = ({ handleAcelerationChange }) => {
	return (
		<div className='controls'>
			<div className='acelerator'><input type="range" onChange={ handleAcelerationChange } defaultValue={50} /></div>
		</div>
	)
}
