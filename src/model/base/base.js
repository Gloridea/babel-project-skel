export default class Base {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}