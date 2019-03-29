const express = require('express');

const router = express.Router();

router.post('/links', async(req, res) => {
    try {
        const links = await LinkModel.find().skip(0).limit(20).sort('latest');
        return res.json({
            msg: links
        });
    } catch(err) {
        console.log(`Failed to get links | ${Date()} | ${err}`);
        return res.json({msg: 'Something went wrong!'});
    }
});

module.exports =  router;