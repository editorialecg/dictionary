import { getTime } from '../service/service'
import { saveblog, findTitle } from '../api/blog/model'


export default {
    newPost: async (parent, args, { Blog }) => {
        const find = await findTitle(parent.title)

        if(find) return null

        const date = getTime()

        return await saveblog(parent.title, parent.body, parent.img, date, parent.signed)
    },

    findPost: async (parent, args, { blog }) => {
        const find = await findTitle(parent.title)

        if(!find) return null

        return find
    }
}