let mongoose = require('mongoose')
let Schema = mongoose.Schema

let imageSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        profilePic: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('Image', imageSchema)
