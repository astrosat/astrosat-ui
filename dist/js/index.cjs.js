'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var zxcvbn = _interopDefault(require('zxcvbn'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".load-mask-module_load-mask__1mwHt {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.load-mask-module_spinner3__zAwsZ {\n  animation: load-mask-module_spin__3OYf2 4s linear infinite;\n  transform-origin: 50% 57%;\n}\n\n.load-mask-module_spinner4__1WmDq {\n  animation: load-mask-module_spin__3OYf2 4s linear infinite;\n  transform-origin: 50% 66.6%;\n}\n\n.load-mask-module_spinner5__1Dd5N {\n  animation: load-mask-module_spin__3OYf2 5s linear infinite;\n  transform-origin: 50% 50%;\n}\n\n@keyframes load-mask-module_spin__3OYf2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n";
var styles = {"load-mask":"load-mask-module_load-mask__1mwHt","spinner3":"load-mask-module_spinner3__zAwsZ","spin":"load-mask-module_spin__3OYf2","spinner4":"load-mask-module_spinner4__1WmDq","spinner5":"load-mask-module_spinner5__1Dd5N"};
styleInject(css);

var LoadMask = function LoadMask() {
  return React__default.createElement("div", {
    className: styles['load-mask']
  }, React__default.createElement("svg", {
    width: "100px",
    height: "100px",
    viewBox: "0 0 1000 1000"
  }, React__default.createElement("circle", {
    cx: "500",
    cy: "570",
    r: "80"
  }), React__default.createElement("circle", {
    cx: "500",
    cy: "570",
    r: "200",
    strokeWidth: "10",
    stroke: "black",
    fill: "none"
  }), React__default.createElement("circle", {
    cx: "500",
    cy: "666",
    r: "300",
    strokeWidth: "10",
    stroke: "black",
    fill: "none"
  }), React__default.createElement("circle", {
    cx: "500",
    cy: "500",
    r: "470",
    strokeWidth: "10",
    stroke: "black",
    fill: "none"
  }), React__default.createElement("g", {
    className: styles.spinner3
  }, React__default.createElement("circle", {
    cx: "300",
    cy: "570",
    r: "30",
    strokeWidth: "10",
    stroke: "white"
  })), React__default.createElement("g", {
    className: styles.spinner4
  }, React__default.createElement("circle", {
    cx: "500",
    cy: "366",
    r: "30",
    strokeWidth: "10",
    stroke: "white"
  })), React__default.createElement("g", {
    className: styles.spinner5
  }, React__default.createElement("circle", {
    cx: "500",
    cy: "30",
    r: "30",
    strokeWidth: "10",
    stroke: "white"
  }))));
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var css$1 = "button.button-module_button__1onJY {\n  border: none;\n  font-size: inherit;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.button-module_button__1onJY {\n  background: var(--button-background);\n  text-decoration: none;\n  color: var(--button-text);\n  border-radius: 2px;\n  padding: 0.125rem 1.1875rem;\n  font-weight: bold;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.button-module_button__1onJY:hover,\n.button-module_button__1onJY:focus {\n  background: var(--button-background-hover);\n  outline: none;\n}\n\n.button-module_disabled__3A8I_ {\n  background: var(--button-background-disabled);\n  opacity: 0.5;\n}\n\n.button-module_active__oiVBO,\n.button-module_button__1onJY:active {\n  background: var(--button-background-active);\n}\n\n.button-module_round__1lWoh {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem 0.5rem;\n  margin: unset;\n  border-radius: 50%;\n}\n\n.button-module_no-padding__TCTS3 {\n  padding: 0;\n}\n";
var styles$1 = {"button":"button-module_button__1onJY","disabled":"button-module_disabled__3A8I_","active":"button-module_active__oiVBO","round":"button-module_round__1lWoh","no-padding":"button-module_no-padding__TCTS3"};
styleInject(css$1);

var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      href = _ref.href,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      active = _ref.active,
      _ref$padded = _ref.padded,
      padded = _ref$padded === void 0 ? true : _ref$padded,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      shape = _ref.shape,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      dataFor = _ref.dataFor;
  var props = {};
  var classes = [styles$1.button];
  if (shape) classes.push(styles$1[shape]);
  if (className) classes.push(className);

  if (href) {
    props.href = href;
  }

  if (!disabled && onClick) {
    props.onClick = onClick;
  }

  if (disabled) {
    classes.push(styles$1.disabled);
  }

  if (active) {
    classes.push(styles$1.active);
  }

  if (!padded) {
    classes.push(styles$1['no-padding']);
  }

  props.className = classes.join(' ');
  return href ? React__default.createElement("a", _extends({
    "data-tip": true,
    "data-for": dataFor
  }, props), children) : React__default.createElement("button", _extends({
    type: type
  }, props, {
    disabled: disabled,
    "aria-label": ariaLabel,
    "data-tip": true,
    "data-for": dataFor
  }), children);
};

var CloseIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"><path fill-rule=\"evenodd\" d=\"M368.475 299.913L593.724 74.665c8.137-8.138 8.137-21.296 0-29.433L554.595 6.103c-8.137-8.137-21.295-8.137-29.433 0L299.913 231.352 74.665 6.103c-8.138-8.137-21.296-8.137-29.433 0L6.103 45.232c-8.137 8.137-8.137 21.295 0 29.433l225.249 225.248L6.103 525.163c-8.137 8.137-8.137 21.295 0 29.432l39.129 39.129c8.137 8.137 21.295 8.137 29.433 0l225.248-225.249 225.25 225.249c8.137 8.137 21.295 8.137 29.432 0l39.129-39.129c8.137-8.137 8.137-21.295 0-29.433L368.475 299.913z\"/></svg>";

var css$2 = ".close-button-module_close__3G0u3 {\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  padding: 0.5rem;\n  background-color: transparent;\n}\n\n.close-button-module_close__3G0u3:hover {\n  background-color: var(--close-button-hover);\n}\n\n.close-button-module_close__3G0u3:active {\n  background-color: var(--close-button-active);\n}\n\n.close-button-module_icon__2-1cP {\n  height: 1rem;\n  fill: var(--close-button-text);\n}\n";
var styles$2 = {"close":"close-button-module_close__3G0u3","icon":"close-button-module_icon__2-1cP"};
styleInject(css$2);

var CloseButton = function CloseButton(_ref) {
  var onClick = _ref.onClick,
      className = _ref.className;
  return React__default.createElement("button", {
    onClick: onClick,
    className: "".concat(styles$2.close, " ").concat(className),
    "aria-label": "close"
  }, React__default.createElement(CloseIcon, {
    className: styles$2.icon,
    alt: "Close"
  }));
};

CloseButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
};

var InfoIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\">\n<path d=\"M2.448 44.067h2.16V22.465h-2.16a2.16 2.16 0 0 1-2.16-2.16v-1.44a2.16 2.16 0 0 1 2.16-2.16h8.64a2.16 2.16 0 0 1 2.16 2.16v25.202h2.161a2.16 2.16 0 0 1 2.16 2.16v1.44a2.16 2.16 0 0 1-2.16 2.16H2.449a2.16 2.16 0 0 1-2.161-2.16v-1.44a2.16 2.16 0 0 1 2.16-2.16zM8.928.864a5.76 5.76 0 1 0 0 11.52 5.76 5.76 0 0 0 0-11.52z\"/>\n</svg>";

var css$3 = ".info-button-module_info__2eQe7 {\n  height: 0.8rem;\n  fill: var(--button-text);\n  padding: 0.2rem 0 0.1rem 0.5rem;\n}\n";
var styles$3 = {"info":"info-button-module_info__2eQe7"};
styleInject(css$3);

var InfoButton = function InfoButton(props) {
  return React__default.createElement(Button, _extends({
    padded: false
  }, props), React__default.createElement(InfoIcon, {
    className: styles$3.info,
    alt: "Info"
  }));
};

var css$4 = ".checkbox-module_checkbox__3IQBp {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.checkbox-module_checkbox__3IQBp input {\n  position: absolute;\n  opacity: 0;\n}\n\n/* .checkbox.active {\n  background-color: #7cd7ff;\n} */\n\n.checkbox-module_checkbox__3IQBp .checkbox-module_checkmark__20zp5 {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 1rem;\n  height: 1rem;\n  background-color: #fff;\n  border: 0.05rem solid #333f48;\n  margin: 0.2rem;\n  margin-right: 0.5rem;\n  border-radius: 0.3rem;\n}\n\n/* On mouse-over, add a grey background color */\n.checkbox-module_checkbox__3IQBp:hover input ~ .checkbox-module_checkmark__20zp5 {\n  background-color: #ccc;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkbox-module_checkmark__20zp5:after {\n  content: '';\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n.checkbox-module_checkbox__3IQBp input:checked ~ .checkbox-module_checkmark__20zp5:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n.checkbox-module_checkbox__3IQBp .checkbox-module_checkmark__20zp5:after {\n  left: 0.25rem;\n  top: 0.05rem;\n  width: 0.3125rem;\n  height: 0.625rem;\n  border: solid #f6be00;\n  border-width: 0 0.1875rem 0.1875rem 0;\n  -webkit-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.checkbox-module_checkbox__3IQBp.checkbox-module_disabled__1tVQd {\n  opacity: 0.5;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n";
var styles$4 = {"checkbox":"checkbox-module_checkbox__3IQBp","checkmark":"checkbox-module_checkmark__20zp5","disabled":"checkbox-module_disabled__1tVQd"};
styleInject(css$4);

var Checkbox = function Checkbox(_ref) {
  var name = _ref.name,
      value = _ref.value,
      label = _ref.label,
      _onChange = _ref.onChange,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      checked = _ref.checked;
  return React__default.createElement("label", {
    className: "".concat(styles$4.checkbox, " ").concat(checked ? styles$4.active : '', "  ").concat(disabled ? styles$4.disabled : '')
  }, React__default.createElement("input", {
    type: "checkbox",
    name: name,
    value: value ? value : name,
    disabled: disabled,
    onChange: function onChange() {
      return _onChange(value);
    },
    checked: checked
  }), React__default.createElement("span", {
    className: styles$4.checkmark
  }), label);
};

var css$5 = ".text-field-module_textfield__1qtEv {\n  border: none;\n  border-bottom: 1px solid #f6be00;\n  color: #333f48;\n}\n\n.text-field-module_icon__31twf {\n  height: 1rem;\n  width: 1rem;\n}\n\n.text-field-module_valid__tCVrN {\n  fill: #6cc24a;\n}\n\n.text-field-module_invalid__1iU4n {\n  fill: #cf6679;\n}\n";
var styles$5 = {"textfield":"text-field-module_textfield__1qtEv","icon":"text-field-module_icon__31twf","valid":"text-field-module_valid__tCVrN","invalid":"text-field-module_invalid__1iU4n"};
styleInject(css$5);

var css$6 = "/* .passwordField {\n  display: flex;\n  border: 1px solid #000;\n}\n\n.passwordInput {\n  flex: 1;\n  border: unset;\n  height: 1.5rem;\n} */\n\n.password-field-module_passwordButton__3dv28 {\n  /* background-color: transparent; */\n  border: 0;\n  background: none;\n  box-shadow: none;\n  border-radius: 0px;\n}\n\n.password-field-module_icon__1jVgM {\n  height: 1rem;\n  width: 1rem;\n}\n";
var passwordStyles = {"passwordButton":"password-field-module_passwordButton__3dv28","icon":"password-field-module_icon__1jVgM"};
styleInject(css$6);

var PasswordField = function PasswordField(_ref) {
  var name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
      classNames = _ref.classNames,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      _ref$autoFocus = _ref.autoFocus,
      autoFocus = _ref$autoFocus === void 0 ? false : _ref$autoFocus;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  var toggleVisibility = function toggleVisibility() {
    return setIsVisible(!isVisible);
  };

  var classes = [styles$5.textfield];
  if (classNames) classes = [].concat(_toConsumableArray(classes), _toConsumableArray(classNames));
  return React__default.createElement("div", null, React__default.createElement("input", {
    type: isVisible ? 'text' : 'password',
    name: name,
    value: value,
    className: classes,
    onChange: onChange,
    placeholder: placeholder,
    required: required,
    autoFocus: autoFocus
  }), React__default.createElement("button", {
    className: passwordStyles.passwordButton,
    onClick: toggleVisibility
  }, isVisible ? 'Show' : 'Hide'));
};

PasswordField.propTypes = {};

var css$7 = ".password-strength-meter-module_passwordMeter__1-6xX {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: none;\n}\n\n.password-strength-meter-module_passwordMeter__1-6xX::-webkit-progress-bar {\n  background-color: #eee;\n  border-radius: 0.3rem;\n}\n\n.password-strength-meter-module_passwordMeter__1-6xX::-moz-progress-bar {\n  background-color: #70c1b3;\n  border-radius: 0.3rem;\n}\n\n.password-strength-meter-module_passwordMeter__1-6xX::-webkit-progress-value {\n  border-radius: 0.3rem;\n}\n\n.password-strength-meter-module_Weak__3rR8D::-webkit-progress-value {\n  background-color: #f25f5c;\n}\n.password-strength-meter-module_Fair__21VJI::-webkit-progress-value {\n  background-color: #ffe066;\n}\n.password-strength-meter-module_Good__3F8hh::-webkit-progress-value {\n  background-color: #247ba0;\n}\n.password-strength-meter-module_Strong__M9Bvk::-webkit-progress-value {\n  background-color: #70c1b3;\n}\n";
var styles$6 = {"passwordMeter":"password-strength-meter-module_passwordMeter__1-6xX","Weak":"password-strength-meter-module_Weak__3rR8D","Fair":"password-strength-meter-module_Fair__21VJI","Good":"password-strength-meter-module_Good__3F8hh","Strong":"password-strength-meter-module_Strong__M9Bvk"};
styleInject(css$7);

var passwordStrength = function passwordStrength(score) {
  switch (score) {
    case 0:
      return 'Weak';

    case 1:
      return 'Weak';

    case 2:
      return 'Fair';

    case 3:
      return 'Good';

    case 4:
      return 'Strong';

    default:
      return 'Weak';
  }
};

var PasswordStrengthMeter = function PasswordStrengthMeter(_ref) {
  var password = _ref.password;
  var passwordResult = password ? zxcvbn(password) : {
    score: 0,
    feedback: {
      suggestions: []
    }
  };
  var strength = passwordStrength(passwordResult.score);
  return React__default.createElement("div", null, React__default.createElement("progress", {
    className: "".concat(styles$6.passwordMeter, " ").concat(styles$6[strength]),
    value: passwordResult.score,
    max: "4"
  }), React__default.createElement("div", null, React__default.createElement("strong", null, "Password Strength:"), "\xA0", strength), React__default.createElement("ul", null, passwordResult.feedback.suggestions.map(function (suggestion) {
    return React__default.createElement("li", {
      key: suggestion
    }, suggestion);
  })));
};

PasswordStrengthMeter.propTypes = {
  password: PropTypes.string
};

var css$8 = ".radio-module_radio__29QfW {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.radio-module_radio__29QfW input {\n  position: absolute;\n  opacity: 0;\n}\n\n/* On mouse-over, add a grey background color */\n.radio-module_radio__29QfW:hover input ~ .radio-module_checkmark__3Mlyw {\n  background-color: #ccc;\n}\n\n/* .radio.active {\n  background-color: #7cd7ff;\n} */\n\n.radio-module_radio__29QfW .radio-module_checkmark__3Mlyw {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 1rem;\n  height: 1rem;\n  background-color: #fff;\n  border: 0.05rem solid #333f48;\n  border-radius: 50%;\n  margin: 0.2rem;\n  margin-right: 0.5rem;\n}\n\n/* Create the indicator (the dot/circle - hidden when not checked) */\n.radio-module_radio__29QfW .radio-module_checkmark__3Mlyw:after {\n  content: '';\n  position: absolute;\n  display: none;\n}\n\n/* Show the indicator (dot/circle) when checked */\n.radio-module_radio__29QfW input:checked ~ .radio-module_checkmark__3Mlyw:after {\n  display: block;\n}\n\n/* Style the indicator (dot/circle) */\n.radio-module_radio__29QfW .radio-module_checkmark__3Mlyw:after {\n  top: 0.099rem;\n  left: 0.099rem;\n  width: 0.8rem;\n  height: 0.8rem;\n  border-radius: 50%;\n  background: #f6be00;\n}\n\n.radio-module_radio__29QfW.radio-module_disabled__1578v {\n  opacity: 0.5;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n";
var styles$7 = {"radio":"radio-module_radio__29QfW","checkmark":"radio-module_checkmark__3Mlyw","disabled":"radio-module_disabled__1578v"};
styleInject(css$8);

var Radio = function Radio(_ref) {
  var name = _ref.name,
      value = _ref.value,
      label = _ref.label,
      _onChange = _ref.onChange,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      checked = _ref.checked;
  return React__default.createElement("label", {
    className: "".concat(styles$7.radio, " ").concat(checked ? styles$7.active : '', "  ").concat(disabled ? styles$7.disabled : '')
  }, React__default.createElement("input", {
    type: "radio",
    id: name,
    name: name,
    value: value ? value : name,
    disabled: disabled,
    onChange: function onChange() {
      return _onChange(value);
    },
    checked: checked
  }), React__default.createElement("span", {
    className: styles$7.checkmark
  }), label);
};

var css$9 = ".text-area-module_textarea__3NNBC {\n  border: none;\n  border-radius: 1rem;\n  box-shadow: 0 0.3rem 1rem 0 rgba(0, 0, 0, 0.1);\n  background-color: #f8f8f8;\n  padding: 1rem;\n}\n";
var styles$8 = {"textarea":"text-area-module_textarea__3NNBC"};
styleInject(css$9);

var TextArea = function TextArea(_ref) {
  var onChange = _ref.onChange,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      rows = _ref.rows,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
      classNames = _ref.classNames;
  var classes = [styles$8.textarea];
  if (classNames) classes = [].concat(_toConsumableArray(classes), _toConsumableArray(classNames));
  return React__default.createElement("textarea", {
    className: classes,
    disabled: disabled,
    onChange: onChange,
    rows: rows,
    placeholder: placeholder
  });
};

var ValidIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\"><circle cx=\"12.5\" cy=\"12.5\" r=\"11.667\"/><path fill=\"#fff\" d=\"M20.445 6.9a.734.734 0 00-1.073 0l-9.085 9.516-3.492-3.658a.734.734 0 00-1.073 0 .821.821 0 000 1.123l4.029 4.22c.296.31.776.31 1.072 0l9.622-10.078a.821.821 0 000-1.124z\"/></svg>";

var InvalidIcon = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 25 25\"><circle cx=\"12.5\" cy=\"12.5\" r=\"11.667\"/><path fill=\"#fff\" d=\"M7.149 8.791l9.207 9.208c.424.423 1.137.397 1.593-.058.455-.455.48-1.169.057-1.592L8.8 7.141c-.424-.423-1.137-.397-1.593.058-.455.455-.48 1.169-.057 1.592h-.001z\"/><path fill=\"#fff\" d=\"M8.28 17.999l9.207-9.208c.424-.423.398-1.137-.057-1.592-.456-.456-1.169-.481-1.593-.058L6.63 16.349c-.424.423-.398 1.137.058 1.592.455.455 1.168.481 1.592.058z\"/></svg>";

var Textfield = function Textfield(_ref) {
  var name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
      valid = _ref.valid,
      classNames = _ref.classNames,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      _ref$autoFocus = _ref.autoFocus,
      autoFocus = _ref$autoFocus === void 0 ? false : _ref$autoFocus;
  var classes = [styles$5.textfield];
  if (classNames) classes = [].concat(_toConsumableArray(classes), _toConsumableArray(classNames));
  return React__default.createElement("div", null, React__default.createElement("input", {
    type: "text",
    name: name,
    value: value,
    className: classes,
    disabled: disabled,
    onChange: onChange,
    placeholder: "".concat(placeholder, "WTF"),
    required: required,
    autoFocus: autoFocus
  }), valid && React__default.createElement(ValidIcon, {
    className: "".concat(styles$5.icon, " ").concat(styles$5.valid)
  }), valid !== undefined && !valid && React__default.createElement(InvalidIcon, {
    className: "".concat(styles$5.icon, " ").concat(styles$5.invalid)
  }));
};

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.CloseButton = CloseButton;
exports.InfoButton = InfoButton;
exports.LoadMask = LoadMask;
exports.PasswordField = PasswordField;
exports.PasswordStrengthMeter = PasswordStrengthMeter;
exports.Radio = Radio;
exports.TextArea = TextArea;
exports.Textfield = Textfield;
