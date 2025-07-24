import { Socket } from "socket.io";
import { User } from "../entities/User";
import { IdGenerator } from "../utils/IdGenerator";

export class UserController {
  private readonly socket: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  public registerListeners() {
    this.socket.on("auth:login", this.login.bind(this));
    this.socket.on("auth:logout", this.logout.bind(this));
    this.socket.on("auth:autologin", this.autologin.bind(this));
  }

  private async login(credentials: string, callback: Function) {
    try {
      const user = await User.findOne({ username: credentials });
      if (!user) {
        throw new Error("Usuario no encontrado");
      }
      user.token = IdGenerator.generate();

      const usersaved = await user.save();

      callback({ success: true, data: usersaved });
    } catch (error: any) {
      callback({ success: false, error: error.message });
    }
  }

  private async logout(token: string, callback: Function) {
    try {
      const user = await User.findOne({ token });
      if (!user) {
        throw new Error("Usuario no encontrado");
      }
      user.token = "";

      const usersaved = await user.save();
      callback({ success: true, data: usersaved });
    } catch (error: any) {
      callback({ success: false, error: error.message });
    }
  }

  private async autologin(token: string, callback: Function) {
    if (!token) return callback({ success: false, error: "" });
    try {
      const user = await User.findOne({ token });
      if (!user) {
        throw new Error("Usuario no encontrado o token no válido");
      }

      callback({ success: true, data: user });
    } catch (error: any) {
      callback({ success: false, error: error.message });
    }
  }
}
