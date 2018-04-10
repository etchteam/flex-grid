import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Item({
  children, grow, shrink, align, xs, sm, md, lg, flex, className, ...props
}) {
  const cx = classNames({
    'flex-grid__item': true,
    'flex-grid__item--grow': grow,
    'flex-grid__item--shrink': shrink,
    'flex-grid__item--flex': flex,
    [`flex-grid__item--align-${align}`]: align !== '',
    [`flex-grid__item--xs-${xs}`]: xs,
    [`flex-grid__item--sm-${sm}`]: sm,
    [`flex-grid__item--md-${md}`]: md,
    [`flex-grid__item--lg-${lg}`]: lg,
    [`${className}`]: className !== '',
  });

  return (
    <div {...props} className={cx}>
      {children}
    </div>
  );
}

Item.propTypes = {
  children: PropTypes.node,
  grow: PropTypes.bool,
  shrink: PropTypes.bool,
  flex: PropTypes.bool,
  align: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch', '']),
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  className: PropTypes.string,
};

Item.defaultProps = {
  children: '',
  flex: false,
  grow: false,
  shrink: false,
  align: '',
  xs: 0,
  sm: 0,
  md: 0,
  lg: 0,
  className: '',
};

function Grid({
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

Grid.Item = Item;

export default Grid;
