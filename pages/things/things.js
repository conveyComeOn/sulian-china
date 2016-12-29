

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Category = function (_Component) {
  (0, _inherits3.default)(Category, _Component);

  function Category(props) {
    (0, _classCallCheck3.default)(this, Category);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Category.__proto__ || (0, _getPrototypeOf2.default)(Category)).call(this, props));

    console.log('======== init');
    _this.state = {
      leftArr: [],
      rightArr: [],
      selectIndex: 0,
      scrollTop: 0
    };
    return _this;
  }

  (0, _createClass3.default)(Category, [{
    key: 'children',
    value: function children() {
      return {};
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var _this2 = this;

      _request2.default.fetchFirstCategory().then(function (result) {
        console.log('***fetchFirstCategory()', result);
        _this2.setState({
          leftArr: result.data.data.categoryinfo
        });
        console.log('=====', _this2.state.leftArr);
      }).then(function (error) {
        console.log(error);
      });

      _request2.default.fetchSecondCategory().then(function (result) {
        // console.log('***fetchFirstCategory()', result);
        _this2.setState({
          rightArr: result.data.data.categoryinfo
        });
        console.log('=====', _this2.state.rightArr);
      }).then(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'requestSecondCategory',
    value: function requestSecondCategory(fatherid) {
      var _this3 = this;

      _request2.default.fetchSecondCategory(fatherid).then(function (result) {
        // console.log('***fetchFirstCategory()', result);
        _this3.setState({
          rightArr: result.data.data.categoryinfo,
          scrollTop: 0
        });
        // console.log('=====', this.state.rightArr);
      }).then(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'handleTap',
    value: function handleTap(e) {
      // console.log(e.currentTarget.id);
      this.setState({
        selectIndex: e.currentTarget.id,
        scrollTop: -10
      });
      var fatherid = this.state.leftArr[e.currentTarget.id].id;
      this.requestSecondCategory(fatherid);
    }
  }]);
  return Category;
}(_labradorImmutable.Component);
