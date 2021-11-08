const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({

    section: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    uid: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    courses: {
        type: Object,
        required: true,
        id: {
            type: Int16Array,
            required:true
        },
        code: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        teacher: {
            type: String,
            required: true
        }
    },

    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});


// We are haching here
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcryptjs.hash(this.password, 12);
    }
    next();
});

// Generating Auth Token
userSchema.methods.generateAuthToken = async function () {
    try {

        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;

    } catch (err) {
        console.log(err);
    }
};


const User = mongoose.model('USER', userSchema);

module.exports = User;