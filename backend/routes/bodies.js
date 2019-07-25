const express = require('express')
const router = express.Router()
let Body = require('../models/Body')

router.get('/:name', (req, res, next) => {
    Body.find({ body: req.params.name })
        .then(body => res.json(body.length === 0 ? {} : body[0]))
        .catch(e => next(e))
})

// router.get('/:id', (req, res, next) => {
//     Body.findById(req.params.id)
//         .then(body => res.json(body))
//         .catch(e => next(e))
// })

router.get('/', (req, res, next) => {
    Body.find()
        .then(bodies => res.json(bodies))
        .catch(e => next(e))
})

module.exports = router
