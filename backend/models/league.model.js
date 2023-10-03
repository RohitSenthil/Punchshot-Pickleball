const mongoose = require("mongoose");
let Match = require("./match.model");
const Schema = mongoose.Schema;

const leagueSchema = new Schema({
    LeagueName: {
        type: String,
        required: true,
        unique: true,
    },
    NumCompetitors: {
        type: Number,
        required: true,
    },
    SkillLevel: {
        type: String,
        required: true,
        enum: ["Novice", "Intermediate", "Advanced"],
    },
    ZipCode: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 5,
    },
    City: {
        type: String,
        required: true,
    },
    Prize: {
        type: String,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Teams: [
        {
            Name: {
                type: String,
                unique: true,
                required: true,
            },
            ProfilePhoto: {
                type: String,
            },
            Players: [Schema.Types.ObjectId],
        },
    ],
    Tournaments: {
        Teams: [
            {
                type: String,
                unique: true,
                required: true,
            },
        ],
        Date: Date,
        Matches: [Match],
        Completed: {
            type: Boolean,
            required: true,
        },
    },
});

const User = mongoose.model("League", leagueSchema);
