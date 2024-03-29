import multer from "multer";
import path from "path";
import fs from "fs";
import { getOperationID } from "../services/operation.service";

export class FileStorage {
  private _storage: multer.StorageEngine;

  constructor(module: string) {
    const moduleName = module;
    const storage = multer.diskStorage({
      destination: async function (req, _file, cb) {
        try {
          let directorySave: string;
          if (moduleName === "company") {
            directorySave = path.join(process.cwd(), "uploads");
          } else {
            const operacion = await getOperationID(req.params.id);
            directorySave = path.join(
              process.cwd(),
              "operations-files",
              `operation_N°${operacion.operationNumber}`
            );
          }
          if (await !fs.existsSync(directorySave)) {
            console.log(
              `La carpeta ${directorySave} no existe. Se creara a continuación`
            );
            try {
              await fs.mkdirSync(directorySave, { recursive: true });
              console.log(
                `El directorio ${directorySave} se creo correctamente`
              );
            } catch (error) {
              console.log("No se creo directorio: ", error);
            }
          }
          cb(null, directorySave);
        } catch (error) {
          console.log(`Error en crear carpeta upload: ${error}`);
        }
      },
      filename: async function (_req, file, cb) {
        const filename = Date.now() + "_" + file.originalname;
        console.log(`Se va a guardar archivo en ${filename}`);
        cb(null, filename);
      },
    });
    this._storage = storage;
  }

  public get upload() {
    return multer({ storage: this._storage });
  }
}
