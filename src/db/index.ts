import { Deta } from 'deta';
import * as DetaTypeFile from 'deta/dist/types/deta';
import Drive from 'deta/dist/types/drive';
import { databaseEntry, returnOnCrudOperation } from '../lib/types';


class DB {
  dbNickName: string;
  public folderArray: Drive[]
  private deta: DetaTypeFile.default;

  public constructor(db_name: string) {
    this.dbNickName = db_name;
    this.deta = this.initDetaDB();
  }

  private initDetaDB() {
    const ProjectKey = process.env.DETA_PROJECT_KEY
    const deta = Deta(ProjectKey);
    return deta;
  }

  public createFolder(folder: string) {
    const folderData = this.deta.Drive(folder);
    this.folderArray.push(folderData);
    return folderData;
  }

  public async CRUDOperation(folderData: Drive, operation: 'put' | 'get' | 'delete' | 'list', data: databaseEntry, userid?: string): Promise<returnOnCrudOperation> {
    try {
      if (operation == 'put') {
        let result = await folderData.put(data.id, { data: data.data, contentType: 'text/plain' });
        return {
          success: true,
          message: result
        };
      }
      else if (operation == 'get') {
        let result = await folderData.get(userid as string);

        if (result !== null) {
          const user_JWT_data = await result?.text();
          return {
            success: true,
            message: user_JWT_data
          };
        }
        else
          return {
            success: false,
            message: "User Not Found"
          }
      }
     else if (operation == 'delete') {
        const result = await folderData.put(data.id, { data: data.data, contentType: 'text/plain' });
        return {
          success: true,
          message: result
        };
      }
     else if (operation == 'list') {
        const result = await folderData.put(data.id, { data: data.data, contentType: 'text/plain' });
        return {
          success: true,
          message: result
        };
      }
      else return {
        success:false,
        message:"Please Enter Operation Name"
      }
    } catch (e) {
      return {
        success: false
      };
    }

  }

}