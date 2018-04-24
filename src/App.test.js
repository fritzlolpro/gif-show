import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

import App from './App';

describe('App', () => {

    it('Defined', () => {
        expect(App).toBeDefined();
    });

    it('Renders', () => {
        const tree = shallow(<App/>);
        expect(tree).toMatchSnapshot();
    });

})

describe('apiCall', () => {
    beforeEach(() => {
        global.fetch = jest
            .fn()
            .mockImplementation(() => {
                var p = new Promise((resolve, reject) => {
                    resolve({

                        id: '123',
                        title: 'test title',
                        images: {
                            downsized_medium: {
                                url: 'test_url'
                            }
                        }

                    })
                })

                return p;
            });

    });

    it("call", async function () {
        const tree = shallow(<App/>);

        const response = await tree
            .instance()
            .callPhotosApi();

        expect(response.id).toBe('123');
        expect(response.title).toBe('test title');
        expect(response.images.downsized_medium.url).toBe('test_url');
    });

})
