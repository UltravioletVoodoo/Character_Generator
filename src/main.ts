import SVG from "svg.js";

import { generatePlayer } from "./GeneratePlayer";
import { util } from "./Util"
import { Character } from "./Character";

const player = generatePlayer() as Character;
console.log(player);


util.getElement("name").innerHTML = player.name;
util.getElement("raceName").innerHTML = player.raceName;
util.getElement("className").innerHTML = player.className;
util.getElement("alignment").innerHTML = player.alignment;

// let draw = SVG('drawing').size(300, 300);
// let rect = draw.rect(100, 100).attr({fill: '#f06'});