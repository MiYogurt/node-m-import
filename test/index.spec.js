import assert from 'power-assert'
import si, { loadToml, loadYaml, loadJsonOrJs } from '../dist'
import { resolve } from 'path'

const source = {
    config: {
        name: 'yugo'
    }
}

describe('load by js', () => {
    it('should equal', () => {
        const target = si(resolve(__dirname, 'source/a.js'))
        assert.deepStrictEqual(source, target)
    });

    it('should equal', () => {
        const target = loadJsonOrJs(resolve(__dirname, 'source/a.js'))
        assert.deepStrictEqual(source, target)
    });
})

describe('load by json', () => {
    it('should equal', () => {
        const target = si(resolve(__dirname, 'source/a.json'))
        assert.deepStrictEqual(source, target)
    });
    it('should equal', () => {
        const target = loadJsonOrJs(resolve(__dirname, 'source/a.json'))
        assert.deepStrictEqual(source, target)
    });
})

describe('load by toml', () => {
    it('should equal', () => {
        const target = si(resolve(__dirname, 'source/a.toml'))
        assert.deepStrictEqual(source, target)
    });
    it('should equal', () => {
        const target = loadToml(resolve(__dirname, 'source/a.toml'))
        assert.deepStrictEqual(source, target)
    });
})

describe('load by yml', () => {
    it('should equal', () => {
        const target = si(resolve(__dirname, 'source/a.yml'))
        assert.deepStrictEqual(source, target)
    });
    it('should equal', () => {
        const target = loadYaml(resolve(__dirname, 'source/a.yml'))
        assert.deepStrictEqual(source, target)
    });
})

describe('load by auto', () => {
    it('should equal', () => {
        const target = si(resolve(__dirname, 'source/.prettierrc'))
        assert.deepStrictEqual({
            seti: false
        }, target)
    });

    it('should an error', () => {
        try {
            si(resolve(__dirname, 'source/b.toml'))
        } catch (e) {
            assert.equal(e.message, `Expected "=" or [ \\t] but end of input found.`)
        }
    });
})