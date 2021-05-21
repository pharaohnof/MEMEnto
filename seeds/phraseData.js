const { Phrase } = require('../models');

const phraseData = [
    { 
        upper_text : "Always has been",
        picture_id : 1
    },
    { 
        upper_text :"Buff Doge vs Cheems",
        picture_id : 2
    },
    { 
        upper_text :"Change my mind",
        picture_id : 3
    },
    { 
        upper_text :"Is this a pigeon",
        picture_id : 4
    },
    { 
        upper_text :"One does not simply",
        picture_id : 5
    },
    { 
        upper_text :"Surprised Pikachu",
        picture_id : 6
    },
    { 
        upper_text :"Unsettled Tom",
        picture_id : 7
    }
];

const seedPhrase = () => Phrase.bulkCreate(phraseData);
module.exports = seedPhrase;
