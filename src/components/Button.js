import React from 'react';
import '../stylesheets/Button.css';

function Button ( props ) {
	const isOperator = (value) => {
		return isNaN(value) && (value !== '=') && (value !== '.');
	};
	
	return (
		<div className={ `buttonContainer ${isOperator(props.children) ? 'operator' : '' }`.trimEnd() }
		onClick={() => props.clickHandler(props.children)} >
			{props.children}
		</div>
  );
}


export default Button;
