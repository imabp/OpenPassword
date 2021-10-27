export type user = {
    id: string;
    personals: user_personals
    email: string
    vaults: vault[]

}
export type user_personals = {
    first_name: string,
    last_name: string,
    github: string,

}
export type vault = {
    id: string,
    members: user[],
    store:secretType[]
}

export type secretType = {
    key: string,
    value: string,
}