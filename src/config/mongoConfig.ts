import mongoose from "mongoose";

export class MongoConnection {
  private static instance: MongoConnection;
  private constructor() {}

  public static getInstance(): MongoConnection {
    if (!MongoConnection.instance) {
      MongoConnection.instance = new MongoConnection();
    }
    return MongoConnection.instance;
  }

  public async connect(): Promise<void> {
    const uri = process.env.DB_URI;
    if (!uri) {
      throw new Error("La variable DB_URI no está definida en el archivo .env");
    }

    try {
      await mongoose.connect(uri);
      console.log("✅ Conexión a MongoDB establecida con éxito");
    } catch (error) {
      console.error("❌ Error al conectar con MongoDB:", error);
      process.exit(1);
    }
  }

  public async disconnect(): Promise<void> {
    try {
      await mongoose.disconnect();
      console.log("🔌 Conexión a MongoDB cerrada");
    } catch (error) {
      console.error("❌ Error al cerrar la conexión con MongoDB:", error);
    }
  }
}
