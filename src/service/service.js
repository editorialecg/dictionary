const moment = require('moment')

export function getTime(){
    return moment().format('MMMM Do YYYY, h:mm:ss a')
}