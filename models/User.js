const { Schema, model } = require ('mongoose');

const userScehma = new Schema(
    {
        username: {
            type: String,
            unique: true,
            require: true,
            trim: true
        },
        email: {
            type: String,
            require: true,
            unique: true,
            match: [/.+@.+\..+/,"Must provide a valid email!"]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

userScehma.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userScehma);

module.exports = User;

