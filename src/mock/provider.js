import React from 'react';
import mock from './store';

const store = mock.store();

class MockProvider extends React.Component {
	getChildContext() {
		return { store };
	}
	render() {
		return (
			<div className="mock-provider">
				{this.props.children}
			</div>
		);
	}
}

MockProvider.childContextTypes = {
	store: React.PropTypes.object,
};

export default MockProvider;
