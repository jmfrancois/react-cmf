import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import RegistryProvider from './RegistryProvider';
import UIRouter from './UIRouter';

const App = (props) => (
	<Provider store={props.store}>
		<I18nextProvider i18n={props.i18n}>
			<RegistryProvider>
				<UIRouter history={props.history} />
			</RegistryProvider>
		</I18nextProvider>
	</Provider>
);

App.propTypes = {
	store: React.PropTypes.object.isRequired,
	i18n: React.PropTypes.object.isRequired,
	history: React.PropTypes.object,
};

export default App;
