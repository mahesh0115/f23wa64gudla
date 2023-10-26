const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const x = Math.random() * 10000 / 100;

    if (req.query.x !== undefined) {
        const queryX = parseFloat(req.query.x);
        if (!isNaN(queryX)) {
            x = Math.round(queryX * 100) / 100;
        }
    }

    const res1 = Math.hypot(x);
    const res2 = Math.ceil(x);
    const res3 = Math.clz32(x);

    res.render('computation', { x, hypot: res1, ceil: res2, clz32: res3 });
});

module.exports = router;