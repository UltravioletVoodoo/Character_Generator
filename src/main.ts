import { Util } from "./Util"
import { Character } from "./character";


const util = new Util;
console.log("Nothing here yet. Complain to the dev for being lazy");


console.log("Creating an empty character...")
let player: Partial<Character> = {attributes: util.pointBuy()};

console.log(player);