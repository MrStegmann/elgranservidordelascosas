import { Socket } from "socket.io";
import { OneShot, IOneShot } from "../entities/OneShot";
import OneshotEnum from "../utils/OneshotEnum";

export class OneShotController {
  private readonly socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  public registerListeners() {
    this.socket.on(OneshotEnum.GET_ALL, this.getAllOneShots.bind(this));
    this.socket.on(OneshotEnum.CREATE, this.createOneShot.bind(this));
    this.socket.on(OneshotEnum.UPDATE, this.updateOneShot.bind(this));
    this.socket.on(OneshotEnum.DELETE, this.deleteOneShot.bind(this));
  }

  private async getAllOneShots(callback: Function) {
    try {
      const found = await OneShot.find();
      callback({ success: true, data: found });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async createOneShot(data: IOneShot, callback: Function) {
    try {
      const created = await OneShot.create(data);
      callback({ success: true, data: created });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async updateOneShot(data: IOneShot, callback: Function) {
    try {
      const updated = await OneShot.findByIdAndUpdate(data._id, data, {
        new: true,
      });
      if (!updated) throw new Error("OneShot not found");
      callback({ success: true, data: updated });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async deleteOneShot(id: string, callback: Function) {
    try {
      const deleted = await OneShot.findByIdAndDelete(id);
      if (!deleted) throw new Error("OneShot not found");
      callback({ success: true });
    } catch (error) {
      callback({ success: false, error });
    }
  }
}
