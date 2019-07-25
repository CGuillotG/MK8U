const express = require('express')
const router = express.Router()
let Driver = require('../models/Driver')

router.get('/:id', (req, res, next) => {
    Driver.findById(req.params.id)
        .then(driver => res.json(driver))
        .catch(e => next(e))
})

router.get('/', (req, res, next) => {
    Driver.find()
        .then(drivers => res.json(drivers))
        .catch(e => next(e))
})

module.exports = router
