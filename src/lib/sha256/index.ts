import { secretsStorage, secretType } from "../types";

const SHA256Hash=async(payload:secretType[],salt:string):Promise<secretsStorage>=>{

    try{

        if(!salt)
        {
            throw new Error("Add a Salt Undefined.")
        }
        


    }catch(e)
    {
        return {hash:e as string}
    }
    

    return {hash:"hsda"}
}