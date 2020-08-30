"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("core-js/stable");

require("regenerator-runtime/runtime");

var _console;

var _marked = /*#__PURE__*/_regenerator["default"].mark(genTest);

// simple generator function
function genTest() {
  return _regenerator["default"].wrap(function genTest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
          _context.next = 6;
          return 3;

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

(_console = console).log.apply(_console, ['genTest ->'].concat((0, _toConsumableArray2["default"])(genTest()))); // promise test


var promise = new Promise(function (resolve) {
  setTimeout(function () {
    return resolve('Done!');
  }, 1000);
});
promise.then(console.log);
