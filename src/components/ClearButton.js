import React from 'react';
import '../stylesheets/ClearButton.css'

const ClearButton = (props) => (
	<div className="buttonClear" onClick={() => props.clickHandler()}>
		Clear
	</div>
);

export default ClearButton;