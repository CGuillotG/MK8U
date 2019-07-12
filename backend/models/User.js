let mongoose = require('mongoose')
let Schema = mongoose.Schema
let passportLocalMongoose = require('passport-local-mongoose')

let userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        profilePic: {
            type: String,
            default: 'https://res.cloudinary.com/cgui1107/image/upload/v1552070261/Weave/ProfilePics/avatar.png'
        },
        builds: {
            type: [
                {
                    driver: String,
                    body: Number,
                    tires: Number,
                    glider: Number,
                    title: String,
                    description: String
                }
            ]
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

module.exports = mongoose.model('User', userSchema)
