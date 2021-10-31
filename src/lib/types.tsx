export type user = {
    id: string;
    personals: user_personals;
    email: string;
    vaults: vault[];

}
export type user_personals = {
    first_name: string;
    last_name: string;
    github: string;
    avatar?:string;

}
export type vault = {
    id: string;
    memberIDs: string[];
    store:secretType[];
}

export type secretType = {
    key: string,
    value: string,
}

export type newUserReqType={
    first_name:string,
    last_name:string,
    email:string,
    github:string,
}

export type Error ={
    status:boolean,
    code:number,
    name:string,
    description?:string,
    resolution?:string,
}

export type databaseEntry = {
    id: string,
    data: string
}
export type returnOnCrudOperation = {
    success: boolean,
    message?:string
}