import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {
	const findPalette = function(id) {
		return seedColors.find((palette) => palette.id === id);
	};
	return (
		<Switch>
			<Route exact path='/' render={() => <h1>Palette list goes here</h1>} />
			<Route
				exact
				path='/palette/:id'
				render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
			/>
		</Switch>
	);
}

export default App;
