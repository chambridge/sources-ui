import { configure, mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import 'babel-polyfill';
import toJson from 'enzyme-to-json';

import 'whatwg-fetch'; // fetch for Nodejs

configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.React = React;
global.toJson = toJson;

window.SVGPathElement = window.Element;
//var svgjs = require('svg.js')(window)

/**
 * setup ENV vars
 */
process.env.BASE_PATH = '/api';

global.insights = {
    chrome: {
        identifyApp: () => ({}),
        auth: {
            getUser: () => new Promise(resolve => resolve({
                identity: {
                    user: {
                        is_org_admin: true
                    }
                }
            }))
        }
    }
};

Element.prototype.scrollTo = () => {};
