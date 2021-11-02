import { Deta } from 'deta';
import Base from 'deta/dist/types/base';
import * as DetaTypeFile from 'deta/dist/types/deta';
import Drive from 'deta/dist/types/drive';
import { U_databaseEntry, returnOnCrudOperation } from '../lib/types';


class UserDB {
  dbNickName: string;
  user_database:Base
  private deta: DetaTypeFile.default;
  
  public constructor(db_name: string) {
    this.dbNickName = db_name;
    this.deta = this.initDetaDB();
    this.user_database=this.deta.Base('user_database');
  }

  private initDetaDB() {
    const ProjectKey = process.env.DETA_PROJECT_KEY
    const deta = Deta(ProjectKey);
    return deta;
  }

  public async addUsertoDB(payload:U_databaseEntry){
    const uuid = payload.id
    try{
      
      const result = await this.user_database.put({key:uuid,dataJWT:payload.datainJWT, plainData:payload.U_datainplain})
      
      return {
        success: true,
        message: result
      };

    }catch(e){
      return {
        success: false,
        message: "Database Insertion Error"
      };
    }
  }

}