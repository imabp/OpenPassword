import short from 'short-uuid'
export const idGenerator =():string=>{
    return short.generate();
}