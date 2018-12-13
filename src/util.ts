export namespace util{
    export function choice<T>(collection: T[]){
        const index = Math.floor(Math.random() * collection.length);
        return collection[index];
    }
}

