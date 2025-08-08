import weaponsDamage from "../json/weaponsDamage.json";
import ammoData from "../json/ammoData.json";

export class WeaponManager {
  static readonly ThinWeapons: number = 3;
  static readonly OneHandWeapons: number = 4;
  static readonly TwoHandsWeapons: number = 5;

  getWeaponsDamage(): object {
    return weaponsDamage;
  }
  getAmmoData(): object {
    return ammoData;
  }

  getUnarmedDamage(
    brutallity: number,
    acrobatic: number,
    bonus: number
  ): number {
    let damage: number = 0;

    const calcBrut: number = brutallity / 2;
    const calcAcrob: number = acrobatic / 2;

    damage = calcBrut + calcAcrob + bonus;

    return damage;
  }
  getFistDamage(
    brutallity: number,
    acrobatic: number,
    bonus: number,
    fistBonus: number
  ): number {
    let damage: number = 0;

    const calcBrut: number = brutallity / 2;
    const calcAcrob: number = acrobatic / 2;

    damage = calcBrut + calcAcrob + bonus + fistBonus;

    return damage;
  }

  getRangedDamage(weaponDamage: number, ammoDamage: number): number {
    let damage: number = 0;

    damage = weaponDamage + ammoDamage;

    return damage;
  }
}
