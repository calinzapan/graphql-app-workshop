import React from 'react';
import { FormInput } from './Input.styles';
import PropTypes from 'prop-types';
const Input = (props) => {
  return (
    <FormInput
      type={props.type}
      placeholder={props.placeholder}
      required={props.required}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
Input.defaultProps = {
  required: false
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
}
export default Input;