//import model
const DataHewan = require('../model/hewanModel')
const fs = require('fs')
const { path } = require('../app')
//method
exports.insertHewan = (req, res) => {
    //penampung data hewan
    let {
        namaHewan,
        jenisHewan,
        jenisKelaminHewan,
        umurHewan
    } = req.body
    let gambarHewan = []
    req.files.forEach((data) => {
        gambarHewan.push(data.path)
    })
    let dataSave = new DataHewan({
        namaHewan: namaHewan,
        jenisHewan: jenisHewan,
        jenisKelaminHewan: jenisKelaminHewan,
        umurHewan: umurHewan,
        gambarHewan: gambarHewan
    })

    dataSave.save().then((doc) => {
        res.status(200).json({
            message: "insert berhasil",
            data: doc
        })
    }).catch(err => {
        res.status(400).send("Gagal insert data :" + err)
    })

}

exports.getHewan = (req, res) => {
    DataHewan.find().exec((err, doc) => {
        if (!err) {
            res.status(200).json({
                message: "GET berhasil",
                data: doc
            })
        } else {
            res.status(400).send("Gagal dapet data :" + err)
        }
    })
}

exports.getHewanByID = (req, res) => {
    let idHewan = req.params.id
    DataHewan.findById(idHewan).exec((err, doc) => {
        if (!err) {
            res.status(200).json({
                message: "GET berhasil",
                data: doc
            })
        } else {
            res.status(400).send("Gagal dapet data :" + err)
        }
    })
}

exports.updateHewan = (req, res) => {
    let idHewan = req.params.id
    DataHewan.findByIdAndUpdate(idHewan, req, (err, doc) => {
        if (!err) {
            req.files.forEach((data, i) => {
                let oldPath = doc.gambarHewan[i]
                let newPath = data.path
                fs.rename(newPath, oldPath, (err) => {
                    if (err) {
                        throw err;
                    }
                })
            })
            res.status(200).json({
                message: "Update berhasil",
                data: doc
            })
        } else {
            res.status(400).send("Gagal update data :" + err)
        }
    })

}

exports.deleteHewan = (req, res) => {
    let idHewan = req.params.id
    DataHewan.findByIdAndDelete(idHewan, (err, doc) => {
        if (!err) {
            doc.gambarHewan.forEach((data) => {
                removeImages(data)
            })

            res.status(200).json({
                message: "hapus berhasil",
                data: doc
            })
        } else {
            res.status(400).send("Gagal update data :" + err)
        }
    })
}

const removeImages = (filepath) => {
    filepath = path.join(__dirname, '../', filepath);
    fs.unlink(filepath, err => {
        console.log(err)
    })
}