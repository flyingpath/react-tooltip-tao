"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styleModule = _interopRequireDefault(require("./style.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReactTooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactTooltip, _React$Component);

  function ReactTooltip(props) {
    var _this;

    _classCallCheck(this, ReactTooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactTooltip).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "setTriStyleBottom", function () {
      _this.styleTriangle = Object.assign(_this.styleTriangle, {
        borderTop: '5px solid transparent',
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderBottom: '5px solid ' + _this.props.borderColor,
        top: 'unset',
        bottom: '100%',
        left: '50%'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setTriStyleTop", function () {
      _this.styleTriangle = Object.assign(_this.styleTriangle, {
        borderTop: '5px solid ' + _this.props.borderColor,
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderBottom: '5px solid transparent',
        top: '100%',
        bottom: 'unset',
        left: '50%',
        right: 'unset'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setTriStyleRight", function () {
      _this.styleTriangle = Object.assign(_this.styleTriangle, {
        borderTop: '5px solid transparent',
        borderLeft: '5px solid transparent',
        borderRight: '5px solid ' + _this.props.borderColor,
        borderBottom: '5px solid transparent',
        top: 'calc(50% - 5px )',
        bottom: 'unset',
        right: '100%',
        left: 'unset'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setTriStyleLeft", function () {
      _this.styleTriangle = Object.assign(_this.styleTriangle, {
        borderTop: '5px solid transparent',
        borderLeft: '5px solid ' + _this.props.borderColor,
        borderRight: '5px solid transparent',
        borderBottom: '5px solid transparent',
        top: 'calc(50% - 5px )',
        bottom: 'unset',
        left: '100%',
        right: 'unset'
      });
    });

    _this.state = {
      show: false
    };
    _this.first = true;
    _this.ref = _react.default.createRef();
    _this.className = '';
    _this.styleTriangle = {
      position: 'absolute',
      borderTop: '5px solid #9ed6ff',
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      top: '100%',
      left: '50%'
    };
    _this.style = {};
    return _this;
  }

  _createClass(ReactTooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.ref.current) {
        this.ref.current.parentElement.onmouseenter = function () {
          _this2.setState({
            show: true
          });
        };

        this.ref.current.parentElement.ontouchstart = function () {
          _this2.setState({
            show: true
          });
        };

        this.ref.current.parentElement.onmouseleave = function () {
          _this2.setState({
            show: false
          });
        };

        this.ref.current.parentElement.ontouchend = function () {
          _this2.setState({
            show: false
          });
        };

        this.style = {};
      }

      this.setState({
        show: false
      });
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      this.className = '';
      var position = this.ref.current.getBoundingClientRect(); // const bodyBoundary   = document.querySelector('body').getBoundingClientRect()

      var parentPosition = this.ref.current.parentElement.getBoundingClientRect();
      var width = position.width;
      var height = position.height;

      if (this.props.position === 'top' || this.props.position === 'bottom') {
        var newTop = parentPosition.top - height - 10;
        var newBottom = null;
        var newLeft = parentPosition.left + parentPosition.width / 2 - width / 2;
        var newRight = null;

        if (this.props.position === 'top') {
          if (parentPosition.top - height <= 1) {
            newTop = parentPosition.top + parentPosition.height + 5;
            this.setTriStyleBottom();
          } else {
            this.setTriStyleTop();
          }
        } else {
          if (parentPosition.top + parentPosition.height + height + 5 <= window.innerHeight) {
            newTop = parentPosition.top + parentPosition.height + 5;
            this.setTriStyleBottom();
          } else {
            this.setTriStyleTop();
          }
        }

        if (parentPosition.left + parentPosition.width / 2 + width / 2 > window.innerWidth) {
          newLeft = null;
          newRight = 0;
        }

        if (parentPosition.left + parentPosition.width / 2 - width / 2 < 1) {
          newLeft = 0;
          newRight = null;
        }

        this.style = {
          top: newTop,
          bottom: newBottom,
          left: newLeft,
          right: newRight
        };
      } else if (this.props.position === 'right' || this.props.position === 'left') {
        var _newTop = parentPosition.top + parentPosition.height / 2 - height / 2;

        var _newBottom = null;

        var _newLeft = parentPosition.left + parentPosition.width + 5;

        var _newRight = null;

        if (this.props.position === 'right') {
          if (parentPosition.left + parentPosition.width + width + 5 <= window.innerWidth) {
            this.setTriStyleRight();
          } else {
            _newLeft = parentPosition.left - width - 5;
            this.setTriStyleLeft();
          }
        } else {
          if (parentPosition.left - width - 10 > 0) {
            _newLeft = parentPosition.left - width - 5;
            this.setTriStyleLeft();
          } else {
            this.setTriStyleRight();
          }
        }

        if (parentPosition.top + parentPosition.height / 2 + height / 2 + 10 > window.innerHeight) {
          _newTop = null;
          _newBottom = 0;
        }

        if (parentPosition.top + parentPosition.height / 2 - height / 2 < 10) {
          _newTop = 0;
          _newBottom = null;
        }

        this.style = {
          top: _newTop,
          bottom: _newBottom,
          left: _newLeft,
          right: _newRight
        };
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "render",
    value: function render() {
      if (this.props.className) {
        this.className += ' ' + this.props.className;
      }

      if (this.state.show) {
        this.className += ' ' + _styleModule.default['show'];
        this.first = false;
      }

      if (!this.first) {
        if (!this.state.show) {
          this.className += ' ' + _styleModule.default['hide'];
        }
      }

      this.className = _styleModule.default['tooltip'] + ' ' + this.className;

      if (!this.props.children) {
        return null;
      }

      var triStyle = Object.assign({}, this.styleTriangle);

      if (this.props.borderColor) {
        this.style.borderColor = this.props.borderColor;
      }

      return _react.default.createElement("div", {
        className: this.className,
        ref: this.ref,
        style: this.style
      }, _react.default.createElement("div", {
        style: triStyle
      }), this.props.children);
    }
  }]);

  return ReactTooltip;
}(_react.default.Component);

ReactTooltip.defaultProps = {
  className: null,
  contentClassName: null,
  position: 'right',
  borderColor: '#ff57223d'
};
var _default = ReactTooltip;
exports.default = _default;