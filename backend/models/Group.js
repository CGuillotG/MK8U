let mongoose = require('mongoose')
let Schema = mongoose.Schema

let groupSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true
        },
        options: {
            type: Array,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('Group', groupSchema)
