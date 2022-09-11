import App from './App';
import { mount } from 'enzyme'

let app;
beforeEach(() => {
  app = mount(<App />);
})

test('renders learn react link', () => {
  expect(app.text()).toEqual('components');
});
