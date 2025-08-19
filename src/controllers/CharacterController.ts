import { Socket } from "socket.io";
import { Character, ICharacter } from "../entities/Character";
import CharEnums from "../utils/CharEnum";
import levels from "../json/levels.json";
import races from "../json/races.json";
import attributeData from "../json/attributeData.json";

export class CharacterController {
  private readonly socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  public registerListeners() {
    this.socket.on(CharEnums.GET_ALL, this.getAllCharacters.bind(this));
    this.socket.on(CharEnums.CREATE, this.createCharacter.bind(this));
    this.socket.on(CharEnums.UPDATE, this.updateCharacter.bind(this));
    this.socket.on(CharEnums.DELETE, this.deleteCharacter.bind(this));

    this.socket.on("character:getLevels", this.getPlayerLevels.bind(this));
    this.socket.on("character:getRaces", this.getRaces.bind(this));
    this.socket.on("character:getAttributes", this.getAttributes.bind(this));
  }

  private getPlayerLevels(token: string, callback: Function) {
    const data: object = levels["player"];
    callback({ success: true, data });
  }

  private getRaces(token: string, callback: Function) {
    const data: object = races;
    callback({ success: true, data });
  }

  private getAttributes(token: string, callback: Function) {
    const data: object = attributeData;
    callback({ success: true, data });
  }

  private async getAllCharacters(callback: Function) {
    try {
      const found = await Character.find()
        .populate("spells")
        .populate("skills");

      callback({ success: true, data: found });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async createCharacter(data: ICharacter, callback: Function) {
    try {
      const created = new Character(data);
      const savedCreated = await created.save();
      await savedCreated.populate("spells");
      await savedCreated.populate("skills");
      callback({ success: true, data: savedCreated });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async updateCharacter(data: ICharacter, callback: Function) {
    try {
      const updated = await Character.findByIdAndUpdate(data._id, data, {
        new: true,
      })
        .populate("spells")
        .populate("skills");
      if (!updated) throw new Error("Character not found");
      callback({ success: true, data: updated });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async deleteCharacter(data: string, callback: Function) {
    try {
      const deleted = await Character.findByIdAndDelete(data);
      if (!deleted) throw new Error("Character not found");
      callback({ success: true });
    } catch (error) {
      callback({ success: false, error });
    }
  }
}
