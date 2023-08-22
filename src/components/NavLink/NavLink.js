import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavLink(
  /* prettier-ignore */
  {
    text,
    classData,
    path,
    handleData,
  },
) {
  return (
    <Link className={classData} to={path} onClick={handleData}>
      {text}
    </Link>
  );
}

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  classData: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  handleData: PropTypes.func.isRequired,
};

export default NavLink;
