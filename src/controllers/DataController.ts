import { Socket } from "socket.io";
import ammoData from "../json/ammoData.json";
import DataEnum from "../utils/DataEnum";
import npcRaces from "../json/npcRaces.json";
import levels from "../json/levels.json";
import attributeData from "../json/attributeData.json";
import weaponDamage from "../json/weaponsDamage.json";

export class DataController {
  private readonly socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  public registerListeners() {
    this.socket.on(DataEnum.GET_AMMO_TYPES, this.getAmmoAllType.bind(this));
    this.socket.on(DataEnum.GET_AMMO_MATERIALS, this.getAmmoMaterial.bind(this));
    this.socket.on(DataEnum.GET_AMMO_DATA, this.getAmmoData.bind(this));

    this.socket.on(DataEnum.GET_NPC_RACES, this.getNpcRaces.bind(this));
    this.socket.on(DataEnum.GET_NPC_LEVELS_DATA, this.getNpcLevelsData.bind(this));
    this.socket.on(DataEnum.GET_NPC_CATEGORIES, this.getNpcCategories.bind(this));
    this.socket.on(DataEnum.GET_NPC_LEVELS, this.getNpcLevels.bind(this));
    this.socket.on(DataEnum.GET_WEAPONS_DATA, this.getWeaponsData.bind(this))
  }

  public getAmmoAllType(): string[] {
    let types: string[] = [];
    types = Object.keys(ammoData);
    return types;
  }

  public getAmmoMaterial(type: string): object {
    try {
      let materials: object = {};
      if (!type) throw new Error("Falta el tipo de munición");
      materials = Object.keys(ammoData[type]);
      return materials;
    } catch (error) {
      return {error};    
    }
  }

  public getAmmoData(type: string, material: string): object {
    try {
      if (!type) throw new Error("Falta el tipo de munición");
      if (!material) throw new Error("Falta el material de la munición");
      
      return ammoData[type][material];
    } catch (error) {
      return {error};    
    }
  }

  public getNpcRaces(): object[] {
    return npcRaces;
  }

  public getNpcLevelsData(): object {
    return levels.npc;
  }

  public getNpcCategories(): string[] {
    const npcLevels = this.getNpcLevelsData();

    return Object.keys(npcLevels);
  }
  public getNpcLevels(category: string): object {
    try {
      if (!category) throw new Error("Falta la categoría");
      const npcLevels = this.getNpcLevelsData()[category]; 
      
      return npcLevels;
    } catch (error) {
      return {error};    
    }
  }

  public getAttributes(): string[] {
    return Object.keys(attributeData);
  }

  public getTalentsByAttribute(attribute: string): object {
    try {
      if (!attribute) throw new Error("Falta el atributo");
      
      return attributeData[attribute];
    } catch (error) {
      return {error};    
    }
  }

  public getWeaponsData(): object {
    return weaponDamage;
  }
}
