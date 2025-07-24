import { Socket } from "socket.io";
import { Item, IItem } from "../entities/Item";
import ItemEnum from "../utils/ItemEnum";

export class ItemController {
  private readonly socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  public registerListeners() {
    this.socket.on(ItemEnum.GET_ALL, this.getAllItems.bind(this));
    this.socket.on(ItemEnum.CREATE, this.createItem.bind(this));
    this.socket.on(ItemEnum.UPDATE, this.updateItem.bind(this));
    this.socket.on(ItemEnum.DELETE, this.deleteItem.bind(this));
  }

  private async getAllItems(callback: Function) {
    try {
      const found = await Item.find();
      callback({ success: true, data: found });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async createItem(data: IItem, callback: Function) {
    try {
      const item = await Item.create(data);
      callback({ success: true, data: item });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async updateItem(data: IItem, callback: Function) {
    try {
      const updated = await Item.findByIdAndUpdate(data._id, data, {
        new: true,
      });
      if (!updated) throw new Error("Item not found");
      callback({ success: true, data: updated });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async deleteItem(id: string, callback: Function) {
    try {
      const deleted = await Item.findByIdAndDelete(id);
      if (!deleted) throw new Error("Item not found");
      callback({ success: true });
    } catch (error) {
      callback({ success: false, error });
    }
  }
}
