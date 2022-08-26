const { Schema, model } = require ('mongoose');
const reactionScehma = require('./Reaction');

const userScehma = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280 
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: timeStr => new Date(timeStr).toDateString()
        },
        username: {
            type: String,
            requied: true
        },
         reactions: [reactionScehma],
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

userScehma.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const User = model('User', userScehma);

module.exports = userScehma;