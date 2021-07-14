import Blog from '../../models/blogModel'

export async function saveblogDao(title, content, img, date, signed) {
    return new Promise((resolve, reject) => Blog.create({
        title: title, content: content, img: img, date: date, signed: signed
    }, (err, data) => {
        if (err)
            return reject(err)
        resolve(data)
    }))
}
export async function findTitleDao(title) {
    return new Promise((resolve, reject) => Blog.findOne({ title: title }, (err, data) => {
        if (err)
            return reject(err)
        resolve(data)
    }))
}
