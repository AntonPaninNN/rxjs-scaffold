import init from "./js/init-observable";
import fromArr from "./js/from-array";
import fromEvent from "./js/from-event";
import range from "./js/from-range";
import fromInterval from "./js/from-interval";

console.log("#1 ==========");
init();
console.log("#2 ==========");
fromArr();
console.log("#3 ==========");
fromEvent();
console.log("#4 ==========");
range();
console.log("#5 ==========");
fromInterval();