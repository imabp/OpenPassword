import { vault, secretType } from "../../types"
import { idGenerator } from "../id"

const emptySecret: secretType = {
    key: "",
    value: ""
}


export const generateVault = (userid: string): vault => {

    const id = idGenerator();
    const memberIDs = [userid];
    const store = [emptySecret]
    return { id, memberIDs, store }

}

