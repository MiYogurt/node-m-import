'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadJsonOrJs = exports.loadToml = exports.loadYaml = undefined;

var _jsYaml = require('js-yaml');

var _jsYaml2 = _interopRequireDefault(_jsYaml);

var _toml = require('toml');

var _toml2 = _interopRequireDefault(_toml);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _ramda = require('ramda');

var R = _interopRequireWildcard(_ramda);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var load = function load(parser) {
    return R.pipe(_path.normalize, _fsExtra2.default.readFileSync, parser);
};
var loadYaml = load(_jsYaml2.default.safeLoad);
var loadToml = load(_toml2.default.parse);
var loadJsonOrJs = function loadJsonOrJs(path) {
    var mod = require(path);
    if (mod["__esModule"]) {
        return mod.default;
    }
    return mod;
};

exports.loadYaml = loadYaml;
exports.loadToml = loadToml;
exports.loadJsonOrJs = loadJsonOrJs;


var endsWithAny = R.curry(function (ends, path) {
    return ends.reduce(function (bool, end) {
        return bool || path.endsWith(end);
    }, false) ? path : false;
});

var schemaimport = R.cond([[endsWithAny(['yaml', 'yml']), loadYaml], [endsWithAny(['toml', 'tml']), loadToml], [endsWithAny(['js', 'json']), loadJsonOrJs], [R.T, function (path) {
    return loadYaml(path) || loadToml(path) || loadJsonOrJs(path);
}]]);

exports.default = schemaimport;