const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const showsSchema = new Schema({
    show: {
        type: String,
        trim: true,
        required: true
    },
    shift: {
        type: String,
        trim: true
    },
    chronocard: [
        {
            day1PunchIn: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
            day1PunchOut: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
            day2PunchIn: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
            day2PunchOut: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
            day3PunchIn: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
            day3PunchOut: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
            day4PunchIn: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
            day4PunchOut: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },


        }
    ]
})