import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Enzyme, {shallow, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

import Loader from './Loader'

describe('Loader', () => {

    it('Loader', () => {
        expect(Loader).toBeDefined();
    });

    it('Renders', () => {
        const tree = shallow(<Loader/>);
        expect(tree).toMatchSnapshot();
    });


})