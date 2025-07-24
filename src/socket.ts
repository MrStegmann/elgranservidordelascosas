import { Server, Socket } from "socket.io";
import { CharacterController } from "./controllers/CharacterController";
import { MongoConnection } from "./config/mongoConfig";
import { NpcController } from "./controllers/NpcController";
import { ItemController } from "./controllers/ItemController";
import { OneShotController } from "./controllers/OneShotController";
import { SkillController } from "./controllers/SkillController";
import { SpellController } from "./controllers/SpellController";
import { UserController } from "./controllers/UserController";
import { Authware } from "./middleware/Authware";

export class SocketServer {
  private readonly io: Server;

  constructor(io: Server) {
    this.io = io;
  }

  public async initialize(): Promise<void> {
    const db = MongoConnection.getInstance();
    await db.connect();

    this.io.on("connection", (socket: Socket) => {
      new Authware(socket);

      const userController = new UserController(socket);
      userController.registerListeners();

      const characterController = new CharacterController(socket);
      characterController.registerListeners();

      const npcController = new NpcController(socket);
      npcController.registerListeners();

      const itemController = new ItemController(socket);
      itemController.registerListeners();

      const oneshotController = new OneShotController(socket);
      oneshotController.registerListeners();

      const skillController = new SkillController(socket);
      skillController.registerListeners();

      const spellController = new SpellController(socket);
      spellController.registerListeners();
    });
  }
}
