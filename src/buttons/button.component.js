import React from 'react';
import styles from './button.module.css';

const Button = ({
  children,
  onClick,
  href,
  disabled = false,
  active,
  padded = true,
  type = 'button',
  shape,
  theme,
  classNames,
  ariaLabel,
  target,
  rel,
  tooltip
}) => {
  const props = {};
  let classes = href && theme === 'link' ? [styles.link] : [styles.button];

  if (classNames) {
    classes = [...classes, ...classNames];
  }

  if (shape) classes.push(styles[shape]);

  if (href) {
    props.href = href;
    if (target) props.target = target;
    if (rel) props.rel = rel;
  }
  if (!disabled && onClick) {
    props.onClick = onClick;
  }
  if (disabled) {
    classes.push(styles.disabled);
  } else {
    if (theme) {
      classes = [...classes, styles[theme]];
    }
  }

  if (active) {
    classes.push(styles.active);
  }
  if (!padded) {
    classes.push(styles['no-padding']);
  }

  if (tooltip) {
    props['data-tip'] = '';
    props['data-for'] = tooltip;
  }

  props.className = classes.join(' ');
  return href ? (
    <a {...props}>{children}</a>
  ) : (
    <button type={type} {...props} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;
