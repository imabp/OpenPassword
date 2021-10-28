import * as jwt from "jsonwebtoken";
import { Error } from "../types";

const SECRET = process.env.GLOBAL_DECRYPT_JWT_SECRET

export const sign = async (
    payload: Record<string, any>
): Promise<string | Error> => {
    try {
        const token = jwt.sign(payload, SECRET as string);
        return token;
    } catch (e) {
        console.log(e);
        return {
            status:true,
            code: 500,
            name: "JWT SIGNING ERROR",
        }
    }
};

export const decrypt = (token: string) => {
    try {
        
        const decoded = jwt.verify(token, SECRET as string);
        return JSON.parse(decoded as string);

    }
    catch (e) {
        console.log(e);
        return {
            status:true,
            code: 401,
            name: "Token Malformed",
        }
    }
}