import { Socket } from "socket.io";
import { Character, ICharacter } from "../entities/Character";
import CodexEnum from "../utils/CodexEnum";
import { Fragment, IFragment } from "../entities/Fragment";

export class CodexController {
  private readonly socket: Socket;
  private readonly FRAGMENT_NOT_FOUND: string =
    "No he podido encontrar el fragmento que estabas buscando... Lo sient.";

  constructor(socket: Socket) {
    this.socket = socket;
  }

  public registerListeners() {
    this.socket.on(CodexEnum.GET_ALL, this.getAll.bind(this));
    this.socket.on(CodexEnum.CREATE, this.create.bind(this));
    this.socket.on(CodexEnum.UPDATE, this.update.bind(this));
    this.socket.on(CodexEnum.DELETE, this.delete.bind(this));
  }

  private async getAll(callback: Function) {
    try {
      const found = await Fragment.find();

      callback({ success: true, data: found });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async create(data: IFragment, callback: Function) {
    try {
      const created = new Fragment(data);
      const savedCreated = await created.save();
      callback({ success: true, data: savedCreated });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async update(data: IFragment, callback: Function) {
    try {
      const updated = await Fragment.findByIdAndUpdate(data._id, data, {
        new: true,
      });
      if (!updated) throw new Error(this.FRAGMENT_NOT_FOUND);
      callback({ success: true, data: updated });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async delete(data: string, callback: Function) {
    try {
      const deleted = await Fragment.findByIdAndDelete(data);
      if (!deleted) throw new Error(this.FRAGMENT_NOT_FOUND);
      callback({ success: true });
    } catch (error) {
      callback({ success: false, error });
    }
  }
}
