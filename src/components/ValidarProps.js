import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const ValidarProps = ({ label, year }) => {
  return (
    <Text style={{ fontSize: 35 }}>
      {label}
      {year + 2000}
    </Text>
  );
}

ValidarProps.defaultProps = {
  label: 'Year: '
}

ValidarProps.propTypes = {
  year: PropTypes.number.isRequired
}

export default ValidarProps