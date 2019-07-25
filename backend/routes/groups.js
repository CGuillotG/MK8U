const express = require('express')
const router = express.Router()
let Group = require('../models/Group')

router.get('/:name', (req, res, next) => {
    Group.find({ name: req.params.name })
        .then(group => res.json(group.length === 0 ? {} : group[0]))
        .catch(e => next(e))
})

// router.get('/:id', (req, res, next) => {
//     Group.findById(req.params.id)
//         .then(group => res.json(group))
//         .catch(e => next(e))
// })

router.get('/', (req, res, next) => {
    Group.find()
        .then(groups => res.json(groups))
        .catch(e => next(e))
})

module.exports = router
