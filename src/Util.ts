export namespace util{
    export function choice<T>(collection: T[]){
        const index = Math.floor(Math.random() * collection.length);
        return collection[index];
    }

    export function choices<T>(collection: T[], n: number){
        let results: T[] = [];
        for(let x of range(n)){
            let Choice = choice(collection);
            collection = arrayDelete(collection, Choice);
            results = results.concat(Choice);
        }
        return results;
    }

    export function range(start: number, end?: number, step?: number){
        const array = []
        if (end === undefined){
            end = start;
            start = 0
        }

        if (step === undefined){
            if (start < end){
                step = 1;
            }else{
                step = -1;
            }
        }

        let current = start;
        if (start < end){
            while (current < end){
                array.push(current);
                current = current + step;
            }
        }else{
            while (current > end){
                array.push(current);
                current = current + step;
            }
        }
        return array;
    }

    export function arrayDelete<T>(collection: T[], value: T){
        return collection.filter(function(item){
            return item !== value
        });
    }

    export function min(collection: number[], notIncludingNegative: boolean = false): number{
        let min = collection[0]
        for(let x of collection){
            if(x < min){
                min = x
            }
        }
        if (notIncludingNegative){
            if(min < 0){
                min = 0
            }
        }
        return min
    }

    export function getElement(id: string): HTMLInputElement{
        return document.getElementById(id) as HTMLInputElement
    }

    export function randomNumberFromRange(range: [number, number]): number {
        return Math.floor(Math.random()*(range[1] - range[0] + 1) + range[0]);
    }
}

