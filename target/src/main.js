import { Util } from "./Util";
import * as SVG from "svg.js";
const util = new Util;
console.log("Nothing here yet. Complain to the dev for being lazy");
console.log("Creating an empty character...");
let player = { attributes: util.pointBuy() };
console.log(player);
let draw = SVG('drawing').size(300, 300);
let rect = draw.rect(100, 100).attr({ fill: '#f06' });
