import { Socket } from "socket.io";
import { User } from "../entities/User";
import { IdGenerator } from "../utils/IdGenerator";

interface IUserCredentials {
  username: string;
  password: string;
}

export class UserController {
  private readonly socket: Socket;
  private readonly userNotFound: string =
    "No he encontrado tu nombre en los registros de personas permitidas...";
  private readonly userNotFoundOrToken: string =
    "Algo ha salido mal... o es tu usuario o es nuestro hechizo de validación automático";

  private readonly userPasswordWrong: string =
    "Ehm... Vaya, que embarazoso. Me temo que esa no es la contraseña correcta... ";

  constructor(socket: Socket) {
    this.socket = socket;
  }

  public registerListeners() {
    this.socket.on("auth:login", this.login.bind(this));
    this.socket.on("auth:logout", this.logout.bind(this));
    this.socket.on("auth:autologin", this.autologin.bind(this));
  }

  private async login(credentials: IUserCredentials, callback: Function) {
    try {
      const user = await User.findOne({ username: credentials.username });
      if (!user) {
        throw new Error(this.userNotFound);
      }

      if (user.password !== credentials.password) {
        throw new Error(this.userPasswordWrong);
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
        throw new Error(this.userNotFound);
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
        throw new Error(this.userNotFoundOrToken);
      }

      callback({ success: true, data: user });
    } catch (error: any) {
      callback({ success: false, error: error.message });
    }
  }
}
