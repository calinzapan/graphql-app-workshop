import React from 'react';
import { FormGroupContainer, FormLabel } from './FormGroup.styles';
import Input from '../Input/Input';
import PropTypes from 'prop-types';

const FormGroup = (props) => {
  return (
    <FormGroupContainer>
      <FormLabel>{props.label}</FormLabel>
      <Input {...props} />
    </FormGroupContainer>
  );
}
FormGroup.defaultProps = {
  required: false
}
FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
}
export default FormGroup;