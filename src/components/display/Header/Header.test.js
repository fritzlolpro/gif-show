import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

import Header from './Header'

describe('Header', () => {

    it('Defined', () => {
        expect(Header).toBeDefined();
    });

    it('Renders', () => {
        const tree = shallow(<Header/>);
        expect(tree).toMatchSnapshot();
    });


})