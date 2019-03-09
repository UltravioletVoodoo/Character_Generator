export function pickColor(range) {
    return "#255444";
}
export function generateColors(range) {
    return {
        skin: pickColor(range),
        eyes: pickColor(),
        hair: pickColor()
    };
}
