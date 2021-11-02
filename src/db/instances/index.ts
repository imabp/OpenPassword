import { U_databaseEntry, V_databaseEntry } from "../../lib/types";
import UserDB from "../User";
import VaultDB from "../Vault";

const UserInstance = new UserDB("user_database");
const VaultInstance = new VaultDB("vault_database");

export const AddNewUser=async(payload:U_databaseEntry)=>{
 return await UserInstance.addUsertoDB(payload)
}

export const AddNewVault= async(payload:V_databaseEntry)=>{
    return await VaultInstance.addVaulttoDB(payload);
}