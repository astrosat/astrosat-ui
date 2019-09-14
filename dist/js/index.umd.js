(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (factory((global.astrosatui = {}),global.React));
}(this, (function (exports,React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

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

  const LoadMask = () => React.createElement("div", {
    className: styles['load-mask']
  }, React.createElement("svg", {
    width: "100px",
    height: "100px",
    viewBox: "0 0 1000 1000"
  }, React.createElement("circle", {
    cx: "500",
    cy: "570",
    r: "80"
  }), React.createElement("circle", {
    cx: "500",
    cy: "570",
    r: "200",
    strokeWidth: "10",
    stroke: "black",
    fill: "none"
  }), React.createElement("circle", {
    cx: "500",
    cy: "666",
    r: "300",
    strokeWidth: "10",
    stroke: "black",
    fill: "none"
  }), React.createElement("circle", {
    cx: "500",
    cy: "500",
    r: "470",
    strokeWidth: "10",
    stroke: "black",
    fill: "none"
  }), React.createElement("g", {
    className: styles.spinner3
  }, React.createElement("circle", {
    cx: "300",
    cy: "570",
    r: "30",
    strokeWidth: "10",
    stroke: "white"
  })), React.createElement("g", {
    className: styles.spinner4
  }, React.createElement("circle", {
    cx: "500",
    cy: "366",
    r: "30",
    strokeWidth: "10",
    stroke: "white"
  })), React.createElement("g", {
    className: styles.spinner5
  }, React.createElement("circle", {
    cx: "500",
    cy: "30",
    r: "30",
    strokeWidth: "10",
    stroke: "white"
  }))));

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

  var css$1 = "button.button-module_button__1onJY {\n  border: none;\n  font-size: inherit;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.button-module_button__1onJY {\n  background: var(--button-background);\n  text-decoration: none;\n  color: var(--button-text);\n  border-radius: 2px;\n  padding: 0.125rem 1.1875rem;\n  font-weight: bold;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.button-module_button__1onJY:hover,\n.button-module_button__1onJY:focus {\n  background: var(--button-background-hover);\n  outline: none;\n}\n\n.button-module_disabled__3A8I_ {\n  background: var(--button-background-disabled);\n  opacity: 0.5;\n}\n\n.button-module_active__oiVBO,\n.button-module_button__1onJY:active {\n  background: var(--button-background-active);\n}\n\n.button-module_round__1lWoh {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem 0.5rem;\n  margin: unset;\n  border-radius: 50%;\n}\n\n.button-module_no-padding__TCTS3 {\n  padding: 0;\n}\n";
  var styles$1 = {"button":"button-module_button__1onJY","disabled":"button-module_disabled__3A8I_","active":"button-module_active__oiVBO","round":"button-module_round__1lWoh","no-padding":"button-module_no-padding__TCTS3"};
  styleInject(css$1);

  const Button = ({
    children,
    onClick,
    href,
    disabled = false,
    active,
    padded = true,
    type,
    className,
    ariaLabel
  }) => {
    const props = {};
    const classes = [styles$1.button];
    if (type) classes.push(styles$1[type]);
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
    return href ? React.createElement("a", props, children) : React.createElement("button", _extends({}, props, {
      disabled: disabled,
      "aria-label": ariaLabel
    }), children);
  };

  exports.Button = Button;
  exports.LoadMask = LoadMask;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
