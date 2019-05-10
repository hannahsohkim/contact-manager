import React from 'react';
import Enzyme, { shallow} from 'enzyme';
import EditForm from '../components/EditForm';



describe('EditForm Component', () => {
  test('renders', () => {
    const wrapper = shallow(<EditForm />);
    expect(wrapper.exists()).toBe(true);
  });
})
