import { util } from "./Util";

export interface Colors {
    skin: string;
    eyes: string;
    hair: string;
}

export function pickColor(range?: Range): string{

    
    return "#255444"
}

export function generateColors(range: Range): Colors{
    return {
        skin: pickColor(range),
        eyes: pickColor(),
        hair: pickColor()
    }
}