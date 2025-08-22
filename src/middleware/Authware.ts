import { Socket } from "socket.io";
import CharEnum from "../utils/CharEnum";
import ItemEnum from "../utils/ItemEnum";
import NpcEnum from "../utils/NpcEnum";
import OneshotEnum from "../utils/OneshotEnum";
import SkillEnum from "../utils/SkillEnum";
import SpellEnum from "../utils/SpellEnum";
import { User } from "../entities/User";
import UserEnum from "../utils/UserEnum";

export class Authware {
  private readonly socket: Socket;
  private readonly protectedEvents = new Set<string>([
    ...Object.values(CharEnum),
    ...Object.values(ItemEnum),
    ...Object.values(NpcEnum),
    ...Object.values(OneshotEnum),
    ...Object.values(SkillEnum),
    ...Object.values(SpellEnum),
    ...Object.values(UserEnum),
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
          if (!token)
            throw new Error(
              "Eh... Jejeje... Verás... Necesitas un pase válido, sino no puedo dejarte pasar"
            );

          // COMPROBAR CON EL USUARIO LA EXISTENCIA DEL TOKEN
          const user = await User.findOne({ token });
          if (!user)
            throw new Error(
              "Esto... ejem... Bueno, a ver... es que no tienes un pase válido."
            );

          // Puedes extender esto si deseas pasar el usuario como 3er argumento
          if (Object.keys(rest).length > 0) {
            return handler(rest.data, callback);
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
