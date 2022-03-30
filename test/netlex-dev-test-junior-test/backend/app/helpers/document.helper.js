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
        const documentContentWords = this.stringToWordsArray(doc.content);
        const minimumLengthWords = this.filterByWordLength(documentContentWords, minWordLength);
        const countSameWord = this.countSameWord(minimumLengthWords);

        // A função sort não é uma biblioteca
        const sortedWords = Object.entries(countSameWord).sort((a, b) => b[1] - a[1]);
        const topWords = [];

        sortedWords.forEach((item, index) => {
            if(index < count) {
                topWords.push(item);
            }
        })

        return topWords;
    },

    stringToWordsArray: function(text) {
        return text.match(/[a-zÀ-ú]+/gmui);
    },

    stringToSentencesArray: function(text) {
        return text.match(/[^\.|\n|\;|\:!\?]+[\.|\n|\;|\:!\?]+/gi);
    },

    filterByWordLength: function(array, minWordLength) {
        return array.filter((item) => item.toLowerCase().length >= minWordLength);
    },

    countSameWord: function(minimumLengthWords) {
        const countSameWord = [];

        minimumLengthWords.forEach((item) => {
            const lowerCase = item.toLowerCase();

            if(countSameWord[lowerCase] !== undefined) {
                return countSameWord[lowerCase]++;
            }

            countSameWord[lowerCase] = 1;
        })

        return countSameWord;
    }
}

