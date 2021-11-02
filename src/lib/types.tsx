
export type user_personals = {
    email:string,
    first_name: string;
    last_name: string;
    github: string;
    avatar?:string;

}


export type secretType = {
    key: string,
    value: string,
}
export type secretsStorage = {
    hash:string
}// this hash includes all the secretType[] key value storage.

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

export type U_databaseEntry = {
    id: string,
    datainJWT: string,
    U_datainplain:UserEntity
}
export type V_databaseEntry = {
    id:string,
    datainJWT:string,
    V_datainplain:VaultEntity
}

export type returnOnCrudOperation = {
    success: boolean,
    message?:string
}

export type UserEntity={
    user_uuid:string,
    personals: user_personals,
    createdAt?:string,
    vaults:{
        owner:string[],
        read_write_access:string[],
        read_only_access:string[],
    }
}
export type VaultEntity={
    vault_uuid:string,
    default_vault:boolean,
    createdAt?:string,
    members:{
        owner:string,
        readonly_members:string[],
        readwrite_members:string[],
        total_members:string[],
    }
    secrets:secretsStorage
}