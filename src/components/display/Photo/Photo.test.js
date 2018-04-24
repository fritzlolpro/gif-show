import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Enzyme, {shallow, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

import Photo from './Photo'

describe('Grid', () => {

    it('Photo', () => {
        expect(Photo).toBeDefined();
    });

    it('Renders without props', () => {
        const tree = shallow(<Photo/>);
        expect(tree).toMatchSnapshot();
    });

    const props = {
        photos: [
            {
                id: '123',
                title: 'test title',
                images: {
                    downsized_medium: {
                        url: 'test_url'
                    }
                }
            }
        ]
    }
    it('Renders with props', () => {
        const tree = shallow(<Photo {...props}/>);
        expect(tree).toMatchSnapshot();
    });

})