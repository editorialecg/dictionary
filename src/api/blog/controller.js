const { saveblog, findTitle } = require('./model')
const moment = require('moment')

module.exports = {
    async saveblog(req, res) {
        const { title, content } = req.body
        const date = moment().format('MMMM Do YYYY, h:mm:ss a')

        if (!title || !content) return res.status(400).send()

        const find = await findTitle(title)

        if (find) return res.status(401).send()

        await saveblog(title, content, date)

        return res.status(200).send()
    }
}