import { Socket } from "socket.io";
import { Skill, ISkill } from "../entities/Skill";
import SkillEnum from "../utils/SkillEnum";

export class SkillController {
  private readonly socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  public registerListeners() {
    this.socket.on(SkillEnum.GET_ALL, this.getAllSkills.bind(this));
    this.socket.on(SkillEnum.CREATE, this.createSkill.bind(this));
    this.socket.on(SkillEnum.UPDATE, this.updateSkill.bind(this));
    this.socket.on(SkillEnum.DELETE, this.deleteSkill.bind(this));
  }

  private async getAllSkills(callback: Function) {
    try {
      const found = await Skill.find();
      callback({ success: true, data: found });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async createSkill(data: ISkill, callback: Function) {
    try {
      const created = await Skill.create(data);
      callback({ success: true, data: created });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async updateSkill(data: ISkill, callback: Function) {
    try {
      const updated = await Skill.findByIdAndUpdate(data._id, data, {
        new: true,
      });
      if (!updated) throw new Error("Skill not found");
      callback({ success: true, data: updated });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async deleteSkill(data: string, callback: Function) {
    try {
      const deleted = await Skill.findByIdAndDelete(data);
      if (!deleted) throw new Error("Skill not found");
      callback({ success: true });
    } catch (error) {
      callback({ success: false, error });
    }
  }
}
