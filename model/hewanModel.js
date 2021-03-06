//insert mongodb nya
const mongodb = require('mongoose')

const ModelHewan = new mongodb.Schema({
    namaHewan: {
        type: String
    },
    jenisHewan: {
        type: String
    },
    jenisKelaminHewan: {
        type: String
    },
    umurHewan: {
        type: "number"
    },
    gambarHewan: {
        type: Array
    }

})
//penampung mongodb model
const DataHewan = mongodb.model('margasatwa', ModelHewan)

module.exports = DataHewan