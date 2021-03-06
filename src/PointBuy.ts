import { Attributes, introduceStatBias } from "./Attributes";
import { util } from "./Util"
import { Options } from "./Options";
import { chooseCharacterClass } from "./CharacterClass";
import { Character } from "./Character";

// Uses the point buy system to generate character attributes
export function pointBuy(character: Character, options: Options){
    let attrs: Attributes = {
        str: 8,
        dex: 8,
        con: 8,
        int: 8,
        wis: 8,
        cha: 8
    };

    let points = 27;
    while(canBuy(attrs, points)) {
        const attr = util.choice(Object.keys(attrs));
        const cost = getCost(attrs, attr);
        if (cost && cost <= points){
            attrs[attr]++;
            points = points - cost;
        }
    }

    // Choose the class
    chooseCharacterClass(character, options);

    // If user selected statBias, introduce a stat bias
    if (options.statBias) {
        attrs = introduceStatBias(character, attrs);
    }
    return attrs;
}

function canBuy(attrs: Attributes, points: number){
    if (points < 0){
        throw 'Error: pointBuy exeeded point cap'
    }
    if(points == 0){
        return false;
    }
    if(points == 1 && Object.values(attrs).every(val => val >= 13)){
        return false;
    }
    return true;
}

function getCost(attrs: Attributes, attr: string){
    const currentValue = attrs[attr];
    if(currentValue < 13){
        return 1;
    }
    if(currentValue < 15){
        return 2;
    }
    return false;
}