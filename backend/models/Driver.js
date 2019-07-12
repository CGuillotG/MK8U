let mongoose = require('mongoose')
let Schema = mongoose.Schema

let driverSchema = new Schema(
    {
        driver: {
            type: String,
            unique: true,
            required: true
        },
        speedGround: {
            type: Number,
            required: true
        },
        speedWater: {
            type: Number,
            required: true
        },
        speedAir: {
            type: Number,
            required: true
        },
        speedAntiGravity: {
            type: Number,
            required: true
        },
        acceleration: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        handlingGround: {
            type: Number,
            required: true
        },
        handlingWater: {
            type: Number,
            required: true
        },
        handlingAir: {
            type: Number,
            required: true
        },
        handlingAntiGravity: {
            type: Number,
            required: true
        },
        traction: {
            type: Number,
            required: true
        },
        miniTurbo: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('Driver', driverSchema)
