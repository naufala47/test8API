//insert mongodb nya
const mongodb = require('mongoose')

const ModelUsers = new mongodb.Schema({
    userNama: {
        type: String
    },
    userEmail: {
        type: String
    },
    userPhone: {
        type: "number"
    },
    userAddress: {
        type: String
    }

})

const DataUser = mongodb.model('users', ModelUsers)

module.exports = DataUser