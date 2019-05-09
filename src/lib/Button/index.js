import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {
  const { children, size, type } = props;
  const sizeClass = `button-${size}`;
  const typeClass = `button-${type}`;
  return (
    <button type="button" className={classnames(styles.button, styles[typeClass], styles[sizeClass])} disabled>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  children: '',
  size: 'medium',
  type: 'primary'
};

export default Button;
