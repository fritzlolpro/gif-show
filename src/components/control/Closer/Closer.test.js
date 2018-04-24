import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

import Closer from './Closer'

describe('Closer', () => {

    it('Defined', () => {
        expect(Closer).toBeDefined();
    });

    it('Renders', () => {
        const tree = shallow(<Closer/>);
        expect(tree).toMatchSnapshot();
    });
})

