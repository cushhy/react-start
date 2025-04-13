import ReactLogo from './assets/react.svg?react';

// декларативный стиль
export const App = () => (
	<div>
		<h1>Hello World</h1>
		<ReactLogo />
		<div>
			<span>{new Date().getFullYear()}</span>
		</div>
	</div>
);
