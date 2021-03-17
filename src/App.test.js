import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Button } from "./components/Button";
import { mount, shallow } from 'enzyme';
import { configure } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe ("Application", () => {
    it('Renders without crashing', () => {
     const div = document.createElement('div');

     ReactDOM.render(<App />, div);
     ReactDOM.unmountComponentAtNode(div);
   });

   it('Load button in templates', () => {
     const app = shallow(<App/>);

     expect(app.find("img").length).toBe(1);
     expect(app.find(Button).length).toBe(3);
   });

   it("Test store", () => {
       let mockStore;

       mockStore = configureMockStore();

       let state = {
           imageState: "http://example.url/image.jpg"
       };

       let store = mockStore(() => state);

       const app = mount(<App store={store} match={{"url": "retail"}} />).instance();
       app.inputDigit({target: {getAttribute: () => 'test state'}});

       expect(app.state.imageState).toBe("test state");
   });
});

describe("Button", () => {
    it('Should render button component', () => {
        const button = shallow(<Button name="Test" imageState={{}} imageIndex={1} />);

        expect(button.text()).toMatch("Test");
        expect(button.find("button").length).toBe(1);
    });

    it("Button click calls the method inputDigit method", () => {
        const imageState = jest.fn();

        const button = shallow(<Button imageState={imageState}/>);

        button.find('button').simulate('click');

        expect(imageState).toHaveBeenCalledTimes(1);
    });
});
