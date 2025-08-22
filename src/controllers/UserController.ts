import { Socket } from "socket.io";
import { IUser, User } from "../entities/User";
import { IdGenerator } from "../utils/IdGenerator";
import UserEnum from "../utils/UserEnum";

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

    this.socket.on(UserEnum.GET_ALL, this.getUsers.bind(this));
    this.socket.on(UserEnum.GET_ONE, this.getUser.bind(this));
    this.socket.on(UserEnum.CREATE, this.create.bind(this));
    this.socket.on(UserEnum.UPDATE, this.update.bind(this));
    this.socket.on(UserEnum.DELETE, this.delete.bind(this));
  }

  private async getUsers(callback: Function) {
    try {
      const users = await User.find({});
      callback({ success: true, data: users });
    } catch (error: any) {
      callback({ success: false, error: error.message });
    }
  }

  private async getUser(id: string, callback: Function) {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new Error(this.userNotFound);
      }
      callback({ success: true, data: user });
    } catch (error: any) {
      callback({ success: false, error: error.message });
    }
  }

  private async create(data: IUser, callback: Function) {
    try {
      const created = new User(data);
      const savedCreated = await created.save();
      callback({ success: true, data: savedCreated });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async update(data: IUser, callback: Function) {
    try {
      const updated = await User.findByIdAndUpdate(data._id, data, {
        new: true,
      });
      if (!updated) throw new Error("User not found");
      callback({ success: true, data: updated });
    } catch (error) {
      console.log(error);
      callback({ success: false, error });
    }
  }

  private async delete(data: string, callback: Function) {
    try {
      const deleted = await User.findByIdAndDelete(data);
      if (!deleted) throw new Error("User not found");
      callback({ success: true });
    } catch (error) {
      callback({ success: false, error });
    }
  }

  private async login(credentials: IUserCredentials, callback: Function) {
    try {
      const user = await User.findOne({ username: credentials.username });
      if (!user) {
        throw new Error(this.userNotFound);
      }

      if (await user.comparePassword(credentials.password)) {
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
