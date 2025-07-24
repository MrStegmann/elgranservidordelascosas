import { Socket } from "socket.io";
import { Spell, ISpell } from "../entities/Spell";
import SpellEnum from "../utils/SpellEnum";

export class SpellController {
  private readonly socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  public registerListeners() {
    this.socket.on(SpellEnum.GET_ALL, this.getAllSpells.bind(this));
    this.socket.on(SpellEnum.CREATE, this.createSpell.bind(this));
    this.socket.on(SpellEnum.UPDATE, this.updateSpell.bind(this));
    this.socket.on(SpellEnum.DELETE, this.deleteSpell.bind(this));
  }

  private async getAllSpells(callback: Function) {
    try {
      const found = await Spell.find();
      callback({ success: true, data: found });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async createSpell(data: ISpell, callback: Function) {
    try {
      const created = await Spell.create(data);
      callback({ success: true, data: created });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async updateSpell(data: ISpell, callback: Function) {
    try {
      const updated = await Spell.findByIdAndUpdate(data._id, data, {
        new: true,
      });
      if (!updated) throw new Error("Spell not found");
      callback({ success: true, data: updated });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async deleteSpell(data: string, callback: Function) {
    try {
      const deleted = await Spell.findByIdAndDelete(data);
      if (!deleted) throw new Error("Spell not found");
      callback({ success: true });
    } catch (error) {
      callback({ success: false, error });
    }
  }
}
