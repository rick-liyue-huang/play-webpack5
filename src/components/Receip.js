import React, {useState} from 'react';

const MyComponent = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => setCount(count+1)}>{count}</button>
		</div>
	);
};

export default MyComponent;
