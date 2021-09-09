import Blog from '../../models/blogModel'

export async function saveblogDao(title, body, img, created_at, signed) {
    return new Promise((resolve, reject) => Blog.create({
        title: title, body: body, img: img, created_at: created_at, signed: signed
    }, (err, data) => {
        if (err) return reject(err)
        resolve(data)
    }))
}
export async function findTitleDao(title) {
    return new Promise((resolve, reject) => Blog.findOne({ title: title }, (err, data) => {
        if (err) return reject(err)
        resolve(data)
    }))
}

export async function allPostDao(){
    return new Promise((resolve, reject) => Blog.find({}, (err,data) =>{
        if(err) return reject(err)
        resolve(data)
    }))
}
