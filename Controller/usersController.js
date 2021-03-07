const DataUser = require('../model/usersModel')

exports.insertUser = (req, res) => {
    let {
        userNama,
        userEmail,
        userPhone,
        userAddress
    } = req.body
    let dataSave = new DataUser({
        userNama: userNama,
        userEmail: userEmail,
        userPhone: userPhone,
        userAddress: userAddress
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

exports.getUser = (req, res) => {
    DataUser.find().exec((err, doc) => {
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

exports.getUserByID = (req, res) => {
    let idUser = req.params.id
    DataUser.findById(idUser).exec((err, doc) => {
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

exports.getUserByAddress = (req, res) => {
    let userAddress = req.params.userAddress
    DataUser.find({ userAddress: { $regex: userAddress, $options: "i" } }).exec((err, doc) => {
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

exports.getUserByEmail = (req, res) => {
    let userEmail = req.params.userEmail
    DataUser.find({ userEmail: { $regex: userEmail, $options: "i" } }).exec((err, doc) => {
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

exports.getUserByPhone = (req, res) => {
    let userPhone = req.params.userPhone
    DataUser.find({ userPhone: { $regex: userPhone, $options: "i" } }).exec((err, doc) => {
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


exports.deleteUser = (req, res) => {
    let idUser = req.params.id
    DataUser.findByIdAndDelete(idUser, (err, doc) => {
        if (!err) {
            res.status(200).json({
                message: "hapus berhasil",
                data: doc
            })
        } else {
            res.status(400).send("Gagal update data :" + err)
        }
    })
}