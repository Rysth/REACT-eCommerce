import React from 'react';
import PropType from 'prop-types';
import './Title.css';

function Title({ text }) {
  return <h2 className="section-title">{text}</h2>;
}

Title.propTypes = {
  text: PropType.string.isRequired,
};

export default Title;
