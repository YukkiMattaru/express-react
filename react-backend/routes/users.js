var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.json([{
        id: 1,
        username: "samsepi01"
    }, {
        id: 2,
        username: "YukkiMattaru"
    }, {
        id: 3,
        username: "Valera"
    }, {
        id: 4,
        username: "Grisha"
    }, {
        id: 5,
        username: "Alen"
    }
    ]);
});

module.exports = router;
