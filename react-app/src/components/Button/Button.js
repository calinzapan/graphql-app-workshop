import React from 'react';
import { BaseButton } from './Button.styles';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <BaseButton {...props}>
      {props.label}
    </BaseButton>
  )
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
export default Button;