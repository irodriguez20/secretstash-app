import React from 'react';
import ReactDOM from 'react-dom';
import EditRecipe from './EditRecipe'

it('renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
        match: { params: {} },
        history: {
            push: () => { }
        },
    }
    ReactDOM.render(<EditRecipe {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});