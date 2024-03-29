import { DataTypes, Model, Sequelize } from "sequelize";

export interface IHistoryOperation {
  id?: string;
  dateTime: Date;
  method: string;
  username: string;
  operation_id?: string;
}

export class HistoryOperation extends Model<IHistoryOperation> {
  public id?: string;
  public dateTime: Date;
  public method: string;
  public username: string;
}

export function initHistoryOperation(sequelize: Sequelize) {
  HistoryOperation.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      method: {
        type: DataTypes.STRING,
      },
      username: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "HistoryOperation",
      timestamps: false,
    }
  );
}
