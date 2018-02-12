import yaml from 'js-yaml'
import toml from 'toml'
import fs from 'fs-extra'
import { normalize } from 'path'
import * as R from 'ramda'

const load = (parser) => R.pipe(normalize, fs.readFileSync, parser);
const loadYaml = load(yaml.safeLoad)
const loadToml = load(toml.parse)
const loadJsonOrJs = (path) => {
    const mod = require(path);
    if (mod["__esModule"]) {
        return mod.default
    }
    return mod;
}

export {
    loadYaml,
    loadToml,
    loadJsonOrJs
}

const endsWithAny = R.curry(
    (ends, path) =>
        ends.reduce(
            (bool, end) => (bool || path.endsWith(end)),
            false) ? path : false
)

const schemaimport = R.cond([
    [endsWithAny(['yaml', 'yml']), loadYaml],
    [endsWithAny(['toml', 'tml']), loadToml],
    [endsWithAny(['js', 'json']), loadJsonOrJs],
    [R.T, (path) => loadYaml(path) || loadToml(path) || loadJsonOrJs(path)]
])

export default schemaimport;

