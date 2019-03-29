const express = require('express');

const router = express.Router();

router.post('/links', async(req, res) => {
    try {
        return res.json({
            msg: req.body.filter
        });
    } catch(err) {
        console.log(`Failed to get links | ${Date()} | ${err}`);
        return res.json({msg: 'Something went wrong!'});
    }
});

module.exports =  router;