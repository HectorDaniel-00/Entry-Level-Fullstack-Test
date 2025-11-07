import { DataTypes, Model } from "sequelize";
import sequelize from "../config/data-base-config";

export class User extends Model {
  public id!: number;

  public email!: string;

  public password!: string;

  public active!: boolean;

  private readonly createdAt!: Date;

  private readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: "users",
    modelName: "User",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
);
