
type importFN = <T>(path: string) => T;

declare const loadYaml: importFN
declare const loadToml: importFN
declare const loadJsonOrJs: importFN
declare const schameimport: importFN

export default schameimport;

export {
    loadYaml,
    loadToml,
    loadJsonOrJs
}