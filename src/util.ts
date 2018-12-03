import { Attributes } from "./Attributes";

export class Util {
    //Just a class to store various helper functions

    choice<T>(collection: T[]){
        const index = Math.floor(Math.random() * collection.length);
        return collection[index];
    }

    pointBuy(){
        const attrs: Attributes = {
            str: 8,
            dex: 8,
            con: 8,
            int: 8,
            wis: 8,
            cha: 8
        };

        let points = 27;
        while(this.canBuy(attrs, points)) {
            console.log("attrs: " + attrs + "\n" + "points: " + points);
            const attr = this.choice(Object.keys(attrs));
            const cost = this.getCost(attrs, attr);
            if (cost && cost <= points){
                attrs[attr]++;
                points = points - cost;
            }
        }
        return attrs;
    }

    private canBuy(attrs: Attributes, points: number){
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

    private getCost(attrs: Attributes, attr: string){
        const currentValue = attrs[attr];
        if(currentValue < 13){
            return 1;
        }
        if(currentValue < 15){
            return 2;
        }
        return false;
    }
}