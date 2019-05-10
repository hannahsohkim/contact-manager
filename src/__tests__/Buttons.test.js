import React from 'react';
import Enzyme, { shallow} from 'enzyme';
import Buttons from '../components/Buttons';
import renderer from 'react-test-renderer';

describe('Button Component', () => {
  test('renders', () => {
    const output = shallow(<Buttons />);
    expect(output.exists()).toBe(true);

    const tree = renderer
    .create(<Buttons id={'1'} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })

  // test('should handle the click event', () => {
  //   window.alert = jest.fn();
  //   const output = shallow(<Buttons />);
  //   output.find('.test').simulate('click');
  //   expect(window.alert).toHaveBeenCalledWith('clicked')
  // })

  test("editToggle should handle state changes", () => {
    const output = shallow(<Buttons />);

    expect(output.state().editToggle).toEqual(true);
    output.find('.test').simulate('click');
    expect(output.state().editToggle).toEqual(false);
  })

  test("deleteToggle should handle state changes", () => {
    const output = shallow(<Buttons />);

    expect(output.state().deleteToggle).toEqual(true);
    output.find('.test2').simulate('click');
    expect(output.state().deleteToggle).toEqual(false);
  })
})

