import React from 'react';

const PillAction = ({ children, className, onClick }) => (
  <button className={clsx(styles.action, className)} onClick={onClick}>
    {React.Children.map(children, element =>
      React.cloneElement(element, {
        ...element.props,
        classes: `${element.props.classes} ${styles.actionChild}`
      })
    )}
  </button>
);

export default PillAction;
