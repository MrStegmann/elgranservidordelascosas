import Intro from "../views/codex/Intro";
import NewCharacter from "../views/codex/NewCharacter";
import AttributesAndTalents from "../views/codex/AttributesAndTalents";
import Races from "../views/codex/Races";
import Perks from "../views/codex/Perks";
import Armor from "../views/codex/Armor";
import Shields from "../views/codex/Shields";
import Weapons from "../views/codex/Weapons";
import Ammo from "../views/codex/Ammo";
import Pets from "../views/codex/Pets";
import SpecialFeatures from "../views/codex/SpecialFeatures";

export default class ViewsManager {
  public static getIntro(): string {
    return Intro;
  }
  public static getNewCharacter(): string {
    return NewCharacter;
  }
  public static getAttributesAndTalents(): string {
    return AttributesAndTalents;
  }
  public static getRaces(): string {
    return Races;
  }
  public static getPerks(): string {
    return Perks;
  }
  public static getArmor(): string {
    return Armor;
  }
  public static getShields(): string {
    return Shields;
  }
  public static getWeapons(): string {
    return Weapons;
  }
  public static getAmmo(): string {
    return Ammo;
  }
  public static getPets(): string {
    return Pets;
  }
  public static getSpecialFeatures(): string {
    return SpecialFeatures;
  }
}
