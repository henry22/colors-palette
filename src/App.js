import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
import NewPaletteForm from './NewPaletteForm';
import { generatePalette } from './colorHelpers';

function App() {
	const findPalette = function(id) {
		return seedColors.find((palette) => palette.id === id);
	};
	return (
		<Switch>
			<Route exact path='/palette/new' render={() => <NewPaletteForm />} />
			<Route
				exact
				path='/palette/:paletteId/:colorId'
				render={(routeProps) => (
					<SingleColorPalette
						palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
						colorId={routeProps.match.params.colorId}
					/>
				)}
			/>
			<Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
			<Route
				exact
				path='/palette/:id'
				render={(routeProps) => <Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />}
			/>
		</Switch>
	);
}

export default App;
