const express = require("express");
const sqlFn = require("../mysql")
const router = express.Router();
const jwt = require("jsonwebtoken")
const config = require("../config")


router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const sql = "select * from user where username =? AND password=?";
    const arr = [username, password];
    sqlFn(sql, arr, function (data) {
        if (data.length > 0) {
            const token = jwt.sign({
                id: data[0].id,
                username: data[0].username
            }, config.jwtSecret)
            res.send({
                code: 0,
                msg: null,
                result: token
            });
        } else {
            res.send({
                code: -1,
                msg: "登录失败",
                result: null
            });
        }
    })
})

router.post("/register", (req, res) => {
    const { username, email, password, passwordConfirm } = req.body;
    var search = "select * from user where `username`=?";
    var insert = "insert into user values (null,?,?,?,?)";
    sqlFn(search, [req.body.username], function (data) {
        if (data.length > 0) {
            res.send({
                code: -1,
                msg: "用户名存在",
                result: null
            });
        } else {
            let arr = [username, email, password, passwordConfirm]
            sqlFn(insert, arr, function (data) {
                if (data.affectedRows) {
                    res.send({
                        code: 0,
                        msg: '',
                        result: "注册成功"
                    });
                } else {
                    res.send({
                        code: -1,
                        msg: '注册失败',
                        result: ""
                    });
                }
            })

        }
    })
})



module.exports = router;