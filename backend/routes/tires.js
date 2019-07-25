const express = require('express')
const router = express.Router()
let Tires = require('../models/Tires')

router.get('/:name', (req, res, next) => {
    Tires.find({ tires: req.params.name })
        .then(tires => res.json(tires.length === 0 ? {} : tires[0]))
        .catch(e => next(e))
})

// router.get('/:id', (req, res, next) => {
//     Tires.findById(req.params.id)
//         .then(tires => res.json(tires))
//         .catch(e => next(e))
// })

router.get('/', (req, res, next) => {
    Tires.find()
        .then(tires => res.json(tires))
        .catch(e => next(e))
})

module.exports = router
