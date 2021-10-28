import { NextApiRequest, NextApiResponse } from "next";
import { newUserReqType, user, vault } from "../../../../src/lib/types";
import { idGenerator } from "../../../../src/lib/generators/id";
import { generateVault } from "../../../../src/lib/generators/vault";
import { sign } from "../../../../src/lib/jwt";
const createUser = async (req: NextApiRequest, res: NextApiResponse) => {

    try {

        const payload: newUserReqType = req.body.payload
        const userid = idGenerator();
        const default_vault = generateVault(userid);

        const newUser: user = createnewuser_tobe_encrypted(userid,payload,default_vault)
        const encrypt_data = await sign(newUser);

        const databaseEntry = {
            id: userid,
            data: encrypt_data
        }


    } catch (e) {
        console.log(e);
        res.status(500).end();
    }

}


const createnewuser_tobe_encrypted = (userid:string, payload:newUserReqType, default_vault:vault): user => {
    return {
        id: userid,
        personals: {
            first_name: payload.first_name,
            last_name: payload.last_name,
            github: payload.github
        },
        email: payload.email,
        vaults: [default_vault]
    }
}
export default createUser;

