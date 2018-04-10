import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Grid({
  children, direction, align, justify, wrap, className, ...props
}) {
  const cx = classNames({
    'flex-grid': true,
    [`flex-grid--${direction}`]: direction !== '',
    [`flex-grid--align-${align}`]: align !== '',
    [`flex-grid--justify-${justify}`]: justify !== '',
    'flex-grid--wrap': wrap,
    [`${className}`]: className !== '',
  });

  return (
    <div {...props} className={cx}>
      {children}
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch', '']),
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse', '']),
  justify: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', '']),
  className: PropTypes.string,
};

Grid.defaultProps = {
  children: '',
  align: 'stretch',
  justify: '',
  wrap: false,
  direction: '',
  className: '',
};
