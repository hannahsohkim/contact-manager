import React from 'react';
import Enzyme, { shallow, mount} from 'enzyme';
import ContactProvider from '../contexts/ContactContext';


describe('ContactProvider', () => {
  test('renders', () => {
    const output = shallow(<ContactProvider />);
    expect(output.exists()).toBe(true);
  })
})

// beforeEach(() => {
//   jest.resetModules();
// });

// const getContactsWithContext = (context = {contacts: [{id: '1', name: 'Test One', email: 'test1@email.com', phone: '111-111-1111'}, {id: '2', name: 'Test Two', email: 'test2@email.com', phone: '222-222-2222'}, {id: '3', name: 'Test Three', email: 'test3@email.com', phone: '333-333-3333'}]}) => {
//   jest.doMock('../contexts/ContactContext', () => {
//     return {
//       ContactContext: {
//         Consumer: (props) => props.children(context)
//       }
//     }
//   });
//   return require('../components/ContactList');
// };

// describe('ContactList Component', () => {
//   test('Component should return default list of contacts', () => {
//     const ContactList = getContactsWithContext();
//     const wrapper = mount(<ContactList />);
//     expect(wrapper.find('Card').length).toBe(3);

//   })
//