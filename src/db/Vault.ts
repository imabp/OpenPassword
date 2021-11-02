import { Deta } from 'deta';
import Base from 'deta/dist/types/base';
import * as DetaTypeFile from 'deta/dist/types/deta';
import Drive from 'deta/dist/types/drive';
import { V_databaseEntry, returnOnCrudOperation } from '../lib/types';


export default class VaultDB {
    dbNickName: string;
    vault_database: Base
    private deta: DetaTypeFile.default;

    public constructor(db_name: string) {
        this.dbNickName = db_name;
        this.deta = this.initDetaDB();
        this.vault_database = this.deta.Base('vault_database');
    }

    private initDetaDB() {
        const ProjectKey = process.env.DETA_PROJECT_KEY
        const deta = Deta(ProjectKey);
        return deta;
    }

    public async addVaulttoDB(payload: V_databaseEntry) {
        const uuid = payload.id
        try {

            const result = await this.vault_database.put({ key: uuid, dataJWT: payload.datainJWT, plainData: payload.V_datainplain })

            return {
                success: true,
                message: result
            };

        } catch (e) {
            return {
                success: false,
                message: "Database Insertion Error"
            };
        }
    }

}