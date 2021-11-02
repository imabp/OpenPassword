import { NextApiRequest, NextApiResponse } from "next";

const deleteUser = async(req:NextApiRequest,res:NextApiResponse)=>{

    try{
        const email = req.body.payload
        const userid = await finduseridbyemail(email)
        const deleteOperation = await deleteuserbyid(userid);
        res.status(200).send({"result":deleteOperation})
    }catch(e){
        res.status(500).end()
    }

}
export default deleteUser;