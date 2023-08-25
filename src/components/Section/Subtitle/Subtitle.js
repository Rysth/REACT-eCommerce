import React from 'react';
import PropType from 'prop-types';
import './Subtitle.css';

function Subtitle({ text }) {
  return <p className="section-subtitle">{text}</p>;
}

Subtitle.propTypes = {
  text: PropType.string.isRequired,
};

export default Subtitle;
