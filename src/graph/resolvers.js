import { getTime } from '../service/service'
import { saveblog, findTitle, allPost } from '../api/blog/model'


export default {
    newPost: async (parent, args, { Blog }) => {
        const find = await findTitle(parent.title)

        console.log(parent)
        if (find) return

        const date = getTime()

        return await saveblog(parent.title, parent.body, parent.img, date, parent.signed)
    },

    onePost: async (parent, args, { blog }) => {
        const find = await findTitle(parent.title)

        if (!find) return null

        return find
    },

    allPost: async(parent, args, { Blog }) =>{
        const post = await allPost()
        return post
    }
}