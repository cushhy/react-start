import ReactLogo from './assets/react.svg?react';
import { createElement } from 'react';

// декларативный стиль
// export const App = () => (
// 	<div>
// 		<h1>Hello World</h1>
// 		<ReactLogo />
// 		<div>
// 			<span>{new Date().getFullYear()}</span>
// 		</div>
// 	</div>
// );

export const App = () =>
	createElement(
		'div',
		null,
		createElement('h1', null, 'Hello World'),
		createElement(ReactLogo),
		createElement('div', null, createElement('span', null, new Date().getFullYear())),
	);
