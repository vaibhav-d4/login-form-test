var express = require("express");
var router = express.Router();
const db = require("./../dbConfig/db");

//check
router.get("/", function (req, res, next) {
    res.send("success");
});

/* GET users listing. */
router.get("/getusers", function (req, res, next) {
    db.query("SELECT * FROM user_data", (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(JSON.stringify(result));
    });
});

// LOGIN
router.post("/login", function (req, res, next) {
    const email = req.body.data.email;
    const password = req.body.data.password;
    // console.log(req);
    console.log(email);
    console.log(password);

    db.query(
        "SELECT * FROM user_data WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if (Object.entries(result).length !== 0) {
                res.send(JSON.stringify(result));
                console.log(result);
            } else {
                res.send("No records");
            }
            if (err) {
                res.send(err);
            }
        }
    );
});

module.exports = router;
