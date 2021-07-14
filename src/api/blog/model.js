import { saveblogDao, findTitleDao } from './DAO'


export async function saveblog(title, content, img, date, signed) {
    return await saveblogDao(title, content, img, date, signed)
}
export async function findTitle(title) {
    return await findTitleDao(title)
}

