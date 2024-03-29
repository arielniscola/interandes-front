import { FileStructure } from "../models/fileStructure";
import {
  HistoryOperation,
  IHistoryOperation,
} from "../models/historyOperation";
import { IOperation, Operation } from "../models/operation";
import { Pricing } from "../models/pricing";
import { SalesOrder } from "../models/salesOrder";
import { TaskList } from "../models/workList";
import { createList } from "./workList.service";

export const getOperationID = async (id: string): Promise<Operation> => {
  try {
    const operation = await Operation.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: HistoryOperation,
        },
        {
          model: TaskList,
        },
        {
          model: Pricing,
        },
        {
          model: SalesOrder,
        },
        {
          model: FileStructure,
        },
      ],
    });
    // Si no encuentra operacion retornar error
    if (!operation) throw Error("Operacion no encontrada");
    return operation;
  } catch (error) {
    throw error;
  }
};

export const addHistoryOperation = async (id: string, method: string) => {
  try {
    // Crear historial de operacion
    const operationHistory: IHistoryOperation = {
      dateTime: new Date(),
      method,
      username: "Ariel Niscola",
      operation_id: id,
    };
    await HistoryOperation.create(operationHistory);
  } catch (error) {
    throw error;
  }
};

export const createOperation = async (type: string): Promise<IOperation> => {
  try {
    console.log("Creando operacion..");
    const op = await Operation.create({
      operationNumber: await generateON(),
      date: new Date(),
      typeOperation: type,
    });
    // Crear lista de tareas
    await createList(op);
    // Crear hitorial
    await addHistoryOperation(op.id, "Creación de Pricing");
    return op;
  } catch (error) {
    throw error;
  }
};
export const getOperations = async () => {
  try {
    const operations = await Operation.findAll();
    return operations;
  } catch (error) {
    throw error;
  }
};

export const updateOperations = async (operation: IOperation) => {
  try {
    const opUpdated = await Operation.update(operation, {
      where: {
        id: operation.id,
      },
    });
    return opUpdated;
  } catch (error) {
    throw error;
  }
};

/** generador de ID */
const generateON = async () => {
  try {
    const lastOp = await Operation.findOne({
      order: [["createdAt", "DESC"]],
    });
    if (lastOp) {
      return lastOp.operationNumber + 1;
    } else {
      return 1;
    }
  } catch (error) {
    throw error;
  }
};
