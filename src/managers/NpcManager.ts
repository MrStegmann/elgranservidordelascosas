import levels from "../json/levels.json";
import races from "../json/npcRaces.json";
import weaponDamage from "../json/weaponsDamage.json";

export class NpcManager {

    // Aplicará el extra de atributos por raza y se añadirá sus características especiales
    // Aplicará los cambios en defensa física y mágica en función de los atributos.

    public static getMaxHealth(category: string, level: number, constitution: number): number {
        const npcLevels = levels.npc;
        let healthPoint: number = npcLevels[category][level].hp;

        healthPoint += constitution;

        return healthPoint;
    }

    // Devuelve el daño físico total en función de los atributos y el arma seleccionada, además de la categoria
    public static getMaxPDamage(weapon: string, strength: number, category: string): number {
        let damage: number = 1;

        const weaponDam: number = weaponDamage[weapon].minDamage;

        damage += weaponDam + (Math.floor(strength/2));

        if (category === "elite") damage += 2;
        else if (category === "boss") damage += 4;

        return damage;
    }

};