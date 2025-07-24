import { Socket } from "socket.io";
import CharEnum from "../utils/CharEnum";
import ItemEnum from "../utils/ItemEnum";
import NpcEnum from "../utils/NpcEnum";
import OneshotEnum from "../utils/OneshotEnum";
import SkillEnum from "../utils/SkillEnum";
import SpellEnum from "../utils/SpellEnum";
import { User } from "../entities/User";

export class Authware {
  private readonly socket: Socket;
  private readonly protectedEvents = new Set<string>([
    CharEnum.GET_ALL,
    CharEnum.CREATE,
    CharEnum.UPDATE,
    CharEnum.DELETE,
    ItemEnum.GET_ALL,
    ItemEnum.CREATE,
    ItemEnum.UPDATE,
    ItemEnum.DELETE,
    NpcEnum.GET_ALL,
    NpcEnum.CREATE,
    NpcEnum.UPDATE,
    NpcEnum.DELETE,
    OneshotEnum.GET_ALL,
    OneshotEnum.CREATE,
    OneshotEnum.UPDATE,
    OneshotEnum.DELETE,
    SkillEnum.GET_ALL,
    SkillEnum.CREATE,
    SkillEnum.UPDATE,
    SkillEnum.DELETE,
    SpellEnum.GET_ALL,
    SpellEnum.CREATE,
    SpellEnum.UPDATE,
    SpellEnum.DELETE,
  ]);

  constructor(socket: Socket) {
    this.socket = socket;
    this.interceptEvents();
  }

  private interceptEvents(): void {
    const originalOn = this.socket.on.bind(this.socket);

    this.socket.on = (
      event: string,
      handler: (...args: any[]) => void
    ): Socket => {
      originalOn(event, async (data: any, callback?: Function) => {
        if (!this.protectedEvents.has(event)) {
          return handler(data, callback);
        }

        try {
          const { token, ...rest } = data;

          if (!token) throw new Error("Token no proporcionado");

          // COMPROBAR CON EL USUARIO LA EXISTENCIA DEL TOKEN
          const user = await User.findOne({ token });
          if (!user) throw new Error("Token no válido");

          // Puedes extender esto si deseas pasar el usuario como 3er argumento
          if (Object.keys(rest).length > 0) {
            return handler(rest, callback);
          } else {
            return handler(callback);
          }
        } catch (error) {
          console.log(error);
        }
      });

      return this.socket;
    };
  }
}
