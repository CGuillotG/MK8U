const express = require('express')
const router = express.Router()
let Glider = require('../models/Glider')

router.get('/:name', (req, res, next) => {
    Glider.find({ glider: req.params.name })
        .then(glider => res.json(glider.length === 0 ? {} : glider[0]))
        .catch(e => next(e))
})

// router.get('/:id', (req, res, next) => {
//     Glider.findById(req.params.id)
//         .then(glider => res.json(glider))
//         .catch(e => next(e))
// })

router.get('/', (req, res, next) => {
    Glider.find()
        .then(gliders => res.json(gliders))
        .catch(e => next(e))
})

module.exports = router
