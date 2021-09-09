import { saveblogDao, findTitleDao, allPostDao } from './DAO'


export async function saveblog(title, body, img, created_at, signed) {
    return await saveblogDao(title, body, img, created_at, signed)
}
export async function findTitle(title) {
    return await findTitleDao(title)
}

export async function allPost(){
    return await allPostDao()
}