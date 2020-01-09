const mongoose = require('mongoose');

const BuchungSchema = new mongoose.Schema({
    sendungsstruktur: {
        type: String,
        required: false
    },
    datepicker: {
        type: Date,
        required: false
    },
    sendungen: {
        type: String,
        required: false
    },
    EUP: {
        type: String,
        required: false
    },
    EWP: {
        type: String,
        required: false
    },
    pakete: {
        type: String,
        required: false
    },
    bemerkung: {
        type: String,
        required: false
    },
    teile: {
        type: String,
        required: false
    }
});

const Buchung = module.exports = mongoose.model('Buchung', BuchungSchema,'buchungs');

module.exports.getBuchung = function(callback, limit){
    Buchung.find(callback).limit(limit);
}

//module.exports = Buchung;