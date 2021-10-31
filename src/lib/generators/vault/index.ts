import { secretType, VaultEntity } from "../../types"
import { idGenerator } from "../id"

const emptySecret: secretType = {
    key: "",
    value: ""
}


export const generateVault = (userid: string, default_vault: boolean =false): VaultEntity => {

    const id = idGenerator();
    const memberIDs = [userid];
    const store = [emptySecret]
    const returnData = {
        vault_uuid: id,
        default_vault: default_vault as boolean,
        members: {
            owner: userid,
            readonly_members: [],
            readwrite_members: [],
            total_members: memberIDs
        },
        secrets:store
    }
    return returnData;

}

