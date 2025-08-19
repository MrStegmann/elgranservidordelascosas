import { Socket } from "socket.io";
import ViewsManager from "../managers/ViewsManager";

export class ViewsController {
  private readonly socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  public registerListeners() {
    this.socket.on("VIEW:CODEX_INTRO", this.getIntro.bind(this));
    this.socket.on("VIEW:CODEX_NEW_CHARACTER", this.getNewCharacter.bind(this));
    this.socket.on(
      "VIEW:CODEX_ATTRIBUTES_AND_TALENTS",
      this.getAttributesAndTalents.bind(this)
    );
    this.socket.on("VIEW:GET_RACES", this.getRaces.bind(this));
    this.socket.on("VIEW:GET_PERKS", this.getPerks.bind(this));
    this.socket.on("VIEW:GET_ARMOR", this.getArmor.bind(this));
    this.socket.on("VIEW:GET_SHIELDS", this.getShields.bind(this));
    this.socket.on("VIEW:GET_WEAPONS", this.getWeapons.bind(this));
    this.socket.on("VIEW:GET_AMMO", this.getAmmo.bind(this));
    this.socket.on("VIEW:GET_PETS", this.getPets.bind(this));
    this.socket.on(
      "VIEW:GET_SPECIAL_FEATURES",
      this.getSpecialFeatures.bind(this)
    );
  }

  private getIntro(token: string, callback: Function) {
    const intro = ViewsManager.getIntro();
    callback({ success: true, data: intro });
  }
  private getNewCharacter(token: string, callback: Function) {
    const newCharacter = ViewsManager.getNewCharacter();
    callback({ success: true, data: newCharacter });
  }
  private getAttributesAndTalents(token: string, callback: Function) {
    const attributesAndTalents = ViewsManager.getAttributesAndTalents();
    callback({ success: true, data: attributesAndTalents });
  }
  private getRaces(token: string, callback: Function) {
    const races = ViewsManager.getRaces();
    callback({ success: true, data: races });
  }
  private getPerks(token: string, callback: Function) {
    const perks = ViewsManager.getPerks();
    callback({ success: true, data: perks });
  }
  private getArmor(token: string, callback: Function) {
    const armor = ViewsManager.getArmor();
    callback({ success: true, data: armor });
  }
  private getShields(token: string, callback: Function) {
    const shields = ViewsManager.getShields();
    callback({ success: true, data: shields });
  }
  private getWeapons(token: string, callback: Function) {
    const weapons = ViewsManager.getWeapons();
    callback({ success: true, data: weapons });
  }
  private getAmmo(token: string, callback: Function) {
    const ammo = ViewsManager.getAmmo();
    callback({ success: true, data: ammo });
  }
  private getPets(token: string, callback: Function) {
    const pets = ViewsManager.getPets();
    callback({ success: true, data: pets });
  }
  private getSpecialFeatures(token: string, callback: Function) {
    const specialFeatures = ViewsManager.getSpecialFeatures();
    callback({ success: true, data: specialFeatures });
  }
}
