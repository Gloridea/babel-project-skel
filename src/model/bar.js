import Base from "./base/base"

export default function bar() {
    let base = new Base('base');
    return "barrrrr...." + base.name;
}