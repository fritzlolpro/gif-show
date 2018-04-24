import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Refresher from './Refresher'

Enzyme.configure({adapter: new Adapter()})

describe('Refresher', () => {

    it('Defined', () => {
        expect(Refresher).toBeDefined();
    });

    it('Renders', () => {
        const tree = shallow(<Refresher/>);
        expect(tree).toMatchSnapshot();
    });

    it('Clicks', () => {
        const mockRefresh = jest.fn()
        const refresher = shallow(<Refresher onRefresh={mockRefresh}/>)

        refresher.simulate('click')

        expect(mockRefresh).toHaveBeenCalled()
        expect(mockRefresh.mock.calls.length).toEqual(1)
    });

})
