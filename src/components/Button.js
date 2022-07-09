import React from 'react';

function Button ( props ) {
	
	const isOperator = (value) => {
		return isNaN(value) && (value !== '=') && (value !== '.');
	};
	
	return (
		<div
			ClassName={ `buttonContainer ${isOperator(props.children) ? 'operator' : '' }`.trimEnd() } >
			{props.children}
		</div>
  );
}

export default Button;
