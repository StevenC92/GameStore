var mongoose = require('mongoose');

// Game Schema
var gameSchema = mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    release_date:
    {
        type: Date,
        default: Date.now
    }
});

var Game = module.exports = mongoose.model('Game', gameSchema);

// Get Games
module.exports.getGames = function(callback, limit)
{
    Game.find(callback).limit(limit);
}

// Add Games
module.exports.addGame = function(game, callback)
{
    Game.create(game, callback);
}