export interface Shield {
    name: string
    acBonus: number
    cost: number
}

export const noShield: Shield = {
    name: "No shield",
    acBonus: 0,
    cost: 0
}

export const lightShield: Shield = {
    name: "Light shield",
    acBonus: 1,
    cost: 10
}

export const mediumShield: Shield = {
    name: "Medium shield",
    acBonus: 2,
    cost: 10
}

export const heavyShield: Shield = {
    name: "Heavy shield",
    acBonus: 2,
    cost: 35
}