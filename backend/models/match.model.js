const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const matchSchema = new Schema({
    Player1: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    Player2: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    Score: {
        Player1Score: {
            type: Number,
        },
        Player2Score: {
            type: Number,
        },
    },
    Winner: {
        type: String,
        enum: ["Player1", "Player2", "Draw"],
    },
    Date: {
        type: Date,
        required: true,
    },
    Completed: {
        type: Boolean,
        required: true,
    },
});

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;
