import { Socket } from "socket.io";
import { Npc, INpc } from "../entities/Npc";
import NpcEnum from "../utils/NpcEnum";

export class NpcController {
  private readonly socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  public registerListeners() {
    this.socket.on(NpcEnum.GET_ALL, this.getAllNpcs.bind(this));
    this.socket.on(NpcEnum.CREATE, this.createNpc.bind(this));
    this.socket.on(NpcEnum.UPDATE, this.updateNpc.bind(this));
    this.socket.on(NpcEnum.DELETE, this.deleteNpc.bind(this));
  }

  private async getAllNpcs(callback: Function) {
    try {
      const found = await Npc.find().populate("spells").populate("skills");
      callback({ success: true, data: found });
    } catch (error: any) {
      callback({ success: false, error: error.message });
    }
  }

  private async createNpc(data: INpc, callback: Function) {
    try {
      const created = new Npc(data);
      const savedCreated = await created.save();
      await savedCreated.populate("spells");
      await savedCreated.populate("skills");
      callback({ success: true, data: savedCreated });
    } catch (error: any) {
      callback({ success: false, error: error.message });
    }
  }

  private async updateNpc(data: INpc, callback: Function) {
    try {
      const updated = await Npc.findByIdAndUpdate(data._id, data, {
        new: true,
      })
        .populate("spells")
        .populate("skills");
      if (!updated) throw new Error("Npc not found");
      callback({ success: true, data: updated });
    } catch (error: any) {
      callback({ success: false, error: error.message });
    }
  }

  private async deleteNpc(id: string, callback: Function) {
    try {
      const deleted = await Npc.findByIdAndDelete(id);
      if (!deleted) throw new Error("Npc not found");
      callback({ success: true });
    } catch (error: any) {
      callback({ success: false, error: error.message });
    }
  }
}
