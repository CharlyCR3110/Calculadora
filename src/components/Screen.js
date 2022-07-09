import React from 'react';
import '../stylesheets/Screen.css';

//Simulates calculator display
const Screen = ( { input } ) => (
	<div className='input'>
		{input}
	</div>
);

export default Screen;