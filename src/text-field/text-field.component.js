import React, { useState } from 'react';
import {
  FormHelperText,
  FormControl,
  InputLabel,
  withStyles,
} from '@material-ui/core';
import Input from '../input/input.component';
import clsx from 'clsx';
import PasswordInput from 'password-input/password-input.component';
import Select from '../select/select.component';

export const styles = {
  /* Styles applied to the root element. */
  root: {},
};

const TextField = React.forwardRef(
  /**
   * @param {import('@material-ui/core').TextFieldProps &
   *   {
   *    valid?: import('../input/input.component').InputProps['valid']
   *    visibilityToggleButtonLabel?: string
   *    maxLength: number
   *   }
   * } props
   * @param {*} ref
   */
  function TextField(props, ref) {
    const {
      autoComplete,
      autoFocus = false,
      children,
      classes,
      className,
      color = 'primary',
      defaultValue,
      disabled = false,
      error = false,
      FormHelperTextProps,
      fullWidth = true,
      helperText,
      hiddenLabel,
      id,
      InputLabelProps = {},
      inputProps = {},
      InputProps,
      inputRef,
      label,
      maxLength,
      multiline = false,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required = false,
      rows,
      rowsMax,
      select = false,
      SelectProps,
      type,
      valid,
      value,
      variant = 'standard',
      visibilityToggleButtonLabel,
      ...other
    } = props;

    const [charCount, setCharCount] = useState(0);

    if (process.env.NODE_ENV !== 'production') {
      if (select && !children) {
        console.error(
          'Material-UI: `children` must be passed when using the `TextField` component with `select`.'
        );
      }
    }

    const InputMore = {};

    if (variant === 'outlined') {
      if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
        InputMore.notched = InputLabelProps.shrink;
      }
      if (label) {
        const displayRequired = InputLabelProps?.required ?? required;
        InputMore.label = (
          <React.Fragment>
            {label}
            {displayRequired && '\u00a0*'}
          </React.Fragment>
        );
      }
    }

    if (multiline) {
      InputLabelProps.shrink = true;
    }

    if (select) {
      // unset defaults from textbox inputs
      if (!SelectProps || !SelectProps.native) {
        InputMore.id = undefined;
      }
      InputMore['aria-describedby'] = undefined;
    }

    if (type === 'password') {
      InputMore.visibilityToggleButtonLabel = visibilityToggleButtonLabel;
    }

    const maxLengthId = maxLength && id ? `${id}-max-length` : undefined;
    const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
    const inputLabelId = label && id ? `${id}-label` : undefined;
    const InputComponent = type === 'password' ? PasswordInput : Input;
    const InputElement = (
      <InputComponent
        aria-describedby={helperTextId}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        error={error}
        fullWidth={fullWidth}
        multiline={multiline}
        name={name}
        rows={rows}
        rowsMax={rowsMax}
        type={type}
        value={value}
        id={id}
        inputRef={inputRef}
        onBlur={onBlur}
        onChange={e => {
          if (maxLength) {
            const count = e.target.value.length;
            setCharCount(count);
          }
          if (onChange) onChange(e);
        }}
        onFocus={onFocus}
        placeholder={placeholder}
        inputProps={{ ...inputProps, maxLength }}
        valid={valid}
        {...InputMore}
        {...InputProps}
      />
    );
    return (
      <FormControl
        className={clsx(classes.root, className)}
        disabled={disabled}
        error={error}
        fullWidth={fullWidth}
        hiddenLabel={hiddenLabel}
        ref={ref}
        required={required}
        color={color}
        variant={variant}
        {...other}
      >
        {label && (
          <InputLabel htmlFor={id} id={inputLabelId} {...InputLabelProps}>
            {label}
          </InputLabel>
        )}
        {select ? (
          <Select
            aria-describedby={helperTextId}
            id={id}
            labelId={inputLabelId}
            value={value}
            input={InputElement}
            {...SelectProps}
          >
            {children}
          </Select>
        ) : (
          InputElement
        )}
        {maxLength && (
          <FormHelperText
            id={maxLengthId}
            {...FormHelperTextProps}
            error={charCount === maxLength}
          >
            {`${charCount}/${maxLength} characters max length`}
          </FormHelperText>
        )}
        {helperText && (
          <FormHelperText id={helperTextId} {...FormHelperTextProps}>
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
);

export default withStyles(styles, { name: 'MuiTextField' })(TextField);
