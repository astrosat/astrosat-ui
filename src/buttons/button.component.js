import React from 'react';
import styles from './button.module.css';
import clsx from 'clsx';

const Button = ({
  active,
  children,
  className,
  classNames,
  disabled,
  href,
  padded = true,
  shape,
  theme = 'primary',
  tooltip,
  ...rest
}) => {
  const _className = clsx(className, classNames, {
    [styles.active]: !!active,
    [styles.button]: !href,
    [styles.disabled]: disabled,
    [styles.link]: href || theme === 'link',
    [styles['no-padding']]: !padded,
    [styles[shape]]: !!shape,
    [styles[theme]]: !!theme && !disabled && !href
  });

  let dataFor, dataTip;
  if (tooltip) {
    dataFor = tooltip;
    dataTip = '';
  }

  return href ? (
    <a
      className={_className}
      data-for={dataFor}
      data-tip={dataTip}
      href={href}
      {...rest}
    >
      {children}
    </a>
  ) : (
    <button
      className={_className}
      data-for={dataFor}
      data-tip={dataTip}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
