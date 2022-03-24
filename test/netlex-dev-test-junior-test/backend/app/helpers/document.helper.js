const Document = require("../models/document");

module.exports = {
    wordFrequency: function(doc, word){
        const documentContentWords = this.stringToWordsArray(doc.content);
        word = word.toLowerCase();

        return (documentContentWords.filter((item) => item.toLowerCase() == word)).length;
    },

    wordSentences: function(doc, word){
        const documentContentSentences = this.stringToSentencesArray(doc.content);
       
        return documentContentSentences.filter((sentence) => {
            let countWords = 0;

            for(let i = 0; i < sentence.length; i++) {
                sentence[i].toLowerCase() == word[countWords].toLowerCase() ? countWords++ : countWords = 0;

                if(countWords == word.length) {
                    return true;
                }
            }

            return false;
        });
    },

    topWords: function(doc, count, minWordLength){
        throw new Error("Not implemented exception")
    },

    stringToWordsArray: function(text) {
        return text.match(/[a-zÀ-ú]+/gmui);
    },

    stringToSentencesArray: function(text) {
        return text.match(/[^\.|\n|\;|\:!\?]+[\.|\n|\;|\:!\?]+/gi);
    }
}

