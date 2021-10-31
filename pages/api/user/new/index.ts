import { NextApiRequest, NextApiResponse } from "next";
import { U_databaseEntry, Error, newUserReqType, UserEntity, VaultEntity, V_databaseEntry } from "../../../../src/lib/types";
import { idGenerator } from "../../../../src/lib/generators/id";
import { generateVault } from "../../../../src/lib/generators/vault";
import { sign } from "../../../../src/lib/jwt";
const createUser = async (req: NextApiRequest, res: NextApiResponse) => {

    try {

        const payload: newUserReqType = req.body

        const userid = idGenerator();
        const default_vault = generateVault(userid,true);

        const newUser: UserEntity = createnewuser_tobe_encrypted(userid,payload,default_vault)

        const encoded_Userdata = await sign(newUser);
        const encoded_Vaultdata = await sign(default_vault);
    
        if((encoded_Userdata as Error).status===true || (encoded_Vaultdata as Error).status===true)
            return  res.status(500).end();

        const USERdatabaseEntry:U_databaseEntry = {
            id: userid,
            data: encoded_Userdata as string
        }
        const VAULTdatabaseEntry:V_databaseEntry = {
            id:default_vault.vault_uuid,
            data:encoded_Vaultdata as string
        }

        /**
         * Call DB Functions
         */

        res.status(200).end();
    } catch (e) {
        console.log(e);
        res.status(500).end();
    }

}


const createnewuser_tobe_encrypted = (userid:string, payload:newUserReqType, default_vault:VaultEntity): UserEntity => {
    return {
        user_uuid: userid,
        personals: {
            first_name: payload.first_name,
            last_name: payload.last_name,
            github: payload.github,
            email: payload.email,
        },
        vaults: {
            owner: [default_vault.vault_uuid],
            read_write_access: [],
            read_only_access: [],
        }
    }
}
export default createUser;

