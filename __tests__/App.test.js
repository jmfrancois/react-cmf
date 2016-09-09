import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import App from '../src/App';
import RegistryProvider from '../src/RegistryProvider';
import UIRouter from '../src/UIRouter';

describe('uiAbstraction App', () => {
	it('App should init stuff', () => {
		const store = {
			subscribe() {},
			dispatch() {},
			getState() {
				return {};
			},
		};
		const history = {};
		const i18n = {};
		const wrapper = shallow(<App store={store} history={history} i18n={i18n} />);
		expect(wrapper.contains(
			<Provider store={store}>
				<I18nextProvider i18n={i18n}>
					<RegistryProvider>
						<UIRouter history={history} />
					</RegistryProvider>
				</I18nextProvider>
			</Provider>)
		).toEqual(true);
	});
});
