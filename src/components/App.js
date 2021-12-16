import React from 'react';
import MyComponent from './Receip';
import '../../styles/global.scss'
import threekingdoms from '../../images/webpack1.jpg'


const App = (props) => {
	return (
		<>
			<section className={'hero'}></section>
			<main>
				<section>
					<h3>oh, hi React from App</h3>
				</section>
				<img src={threekingdoms} alt="" width={'500'}/>
				<MyComponent />
			</main>
		</>
	);
}

export default App;
