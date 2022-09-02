const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const {limit, offset} = req.query;
    if(limit || offset){
        res.json({
            limit,
            offset
        })
    }else{
        res.send('NO query parameters')
    }
    
})

//crear user
router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'Created',
        data: body
    });
})

//update user
router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const body = req.body;
    res.json({
        message: 'Updated using patch',
        data: body,
        id
    });
})

//delete user
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.json({
        message: 'Delete',
        id
    });
})


module.exports = router;