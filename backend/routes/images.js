const express = require('express')
const router = express.Router()
let Image = require('../models/Image')

router.get('/:name', (req, res, next) => {
    Image.find({ name: req.params.name })
        .then(image => res.json(image.length === 0 ? {} : image[0]))
        .catch(e => next(e))
})

// router.get('/:id', (req, res, next) => {
//     Image.findById(req.params.id)
//         .then(image => res.json(image))
//         .catch(e => next(e))
// })

router.get('/', (req, res, next) => {
    Image.find()
        .then(images => res.json(images))
        .catch(e => next(e))
})

module.exports = router
